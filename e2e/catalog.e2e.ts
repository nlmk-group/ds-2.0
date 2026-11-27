import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';

interface Entry {
  id: string;
  title: string;
  type: string;
}

const { entries } = JSON.parse(readFileSync('storybook-static/index.json', 'utf8')) as {
  entries: Record<string, Entry>;
};
const groups = new Map<string, Entry[]>();
for (const entry of Object.values(entries)) {
  if (entry.type !== 'story') continue;
  const stories = groups.get(entry.title) ?? [];
  stories.push(entry);
  groups.set(entry.title, stories);
}

for (const [group, stories] of groups) {
  test(group, async ({ page, baseURL }) => {
    test.setTimeout(15_000 + 10_000 * stories.length);
    const exceptions: string[] = [];
    page.on('pageerror', error => exceptions.push(error.message));
    // Examples must render with the local package, fonts and fixtures.
    await page.route(/^https?:/, route => {
      return new URL(route.request().url()).origin === baseURL ? route.continue() : route.abort();
    });
    for (const { id } of stories) {
      await test.step(id, async () => {
        await page.goto('/iframe.html?viewMode=story&id=' + id, { waitUntil: 'domcontentloaded' });
        await expect(page.locator('body')).toHaveClass(/sb-show-main/);
        await expect(page.locator('#storybook-root > *').first()).toBeAttached();
        await page.evaluate(() => document.fonts.ready.then(() => undefined));
        await expect
          .poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth))
          .toBeLessThanOrEqual(0);
        expect(exceptions).toEqual([]);
      });
    }
  });
}

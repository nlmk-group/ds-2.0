import { expect, test } from '@playwright/test';

const previews = [
  { id: 'components-radio-stories--radio-default', mode: 'story', kind: 'component', ready: '#storybook-root input' },
  { id: 'components-radio-info--docs', mode: 'docs', kind: 'docs', ready: '#storybook-docs [role="tablist"]' },
  { id: 'table-stories--compact-table', mode: 'story', kind: 'table', ready: '#storybook-root table' }
];

for (const { id, mode, kind, ready } of previews) {
  test(`Скелетон ${kind} виден до запуска Storybook и исчезает после загрузки`, async ({ page }, testInfo) => {
    const dark = testInfo.project.name === 'mobile-width';
    await page.emulateMedia({ colorScheme: dark ? 'dark' : 'light', reducedMotion: dark ? 'reduce' : 'no-preference' });
    let release!: () => void;
    const pending = new Promise<void>(resolve => {
      release = resolve;
    });
    await page.route(/\/assets\/iframe-[^/]+\.js$/, async route => {
      await pending;
      await route.continue();
    });
    await page.goto(`/iframe.html?id=${id}&viewMode=${mode}`, { waitUntil: 'commit' });
    const skeleton = page.locator(`#preview-loading [data-sb-skeleton="${kind}"]`);
    try {
      await expect(skeleton).toBeVisible();
      await expect(page.locator('#preview-loading [role=status]:visible')).toHaveCount(1);
      const bar = skeleton.locator('[data-ui-skeleton-item]').first();
      await expect(bar).toBeVisible();
      if (dark) await expect(bar).toHaveCSS('animation-name', 'none');
      else await expect(bar).not.toHaveCSS('animation-name', 'none');
      const rect = (await bar.boundingBox())!;
      expect(rect.width).toBeGreaterThan(8);
      expect(rect.height).toBeGreaterThan(8);
      await testInfo.attach('Загрузка', { body: await page.screenshot(), contentType: 'image/png' });
    } finally {
      release();
    }
    await expect(page.locator(ready).first()).toBeAttached();
    await expect(page.locator('#preview-loading')).toBeHidden();
  });
}

test('При повторной загрузке поставок скелетон заменяет только данные', async ({ page }) => {
  await page.goto('/iframe.html?id=table-stories--supply-registry&viewMode=story&args=initialState:error');
  const retry = page.getByRole('button', { name: 'Повторить' });
  await expect(retry).toBeVisible();
  await page.clock.install();
  await page.clock.pauseAt(new Date(Date.now() + 1000));
  await retry.click();
  await expect(page.getByRole('textbox', { name: 'Поиск по материалу' })).toBeVisible();
  const table = page.getByRole('table', { name: 'Поставки' });
  await expect(table).toHaveAttribute('aria-busy', 'true');
  await expect(table.locator('[data-ui-skeleton-item]')).toHaveCount(9);
  await page.clock.runFor(301);
  await expect(table.getByText('Сталь листовая')).toBeVisible();
  await expect(table.locator('[data-ui-skeleton-item]')).toHaveCount(0);
});

test('Код и результат отложенного примера появляются при прокрутке', async ({ page }) => {
  await page.goto('/iframe.html?id=components-draganddrop-info--docs&viewMode=docs');
  const example = page
    .locator('#storybook-docs')
    .getByText('Полностью кастомный контент через children.', { exact: true });
  await expect(page.locator('#storybook-docs [data-sb-skeleton="code"]').last()).toBeAttached();
  await example.scrollIntoViewIfNeeded();
  await expect(page.locator('.preview-container').getByText('Кастомная зона загрузки', { exact: true })).toBeVisible();
});

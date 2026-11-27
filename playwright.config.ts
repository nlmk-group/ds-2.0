import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  forbidOnly: Boolean(process.env.CI),
  workers: 3,
  use: { baseURL: 'http://127.0.0.1:6010', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 800 } } },
    { name: 'mobile-width', use: { viewport: { width: 390, height: 800 } } }
  ],
  webServer: {
    command: 'yarn vite preview . --outDir storybook-static --host 127.0.0.1 --port 6010 --strictPort',
    url: 'http://127.0.0.1:6010/iframe.html',
    reuseExistingServer: !process.env.CI
  }
});

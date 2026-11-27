import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import path from 'path';
import { mergeConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import { renderPreviewSkeleton } from './previewSkeleton.js';
import { storybookLightTheme, storybookDarkTheme } from './storybookTheme.js';

const dirname = fileURLToPath(new URL('.', import.meta.url));

const withLoadingTheme = head => readFileSync(new URL('./loading-head.html', import.meta.url), 'utf8') + head;

let skeletonMarkup;

export default {
  managerHead: withLoadingTheme,
  previewHead: withLoadingTheme,
  previewBody: async body => {
    skeletonMarkup ??= renderPreviewSkeleton();
    return body + await skeletonMarkup;
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  async viteFinal(config) {
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 2400;
    }
    return mergeConfig(config, {
      base: './',
      plugins: [{
        name: 'storybook-test-results',
        enforce: 'pre',
        transform(source, id) {
          if (id !== path.resolve(dirname, '../.jest-test-results.json')) return;

          // Only the visible test results should invalidate cached documentation.
          const { testResults } = JSON.parse(source);
          const suites = testResults.map(({ name, assertionResults }) => ({
            name: path.basename(name),
            assertionResults: assertionResults.map(({ title, status }) => ({ title, status }))
          }));
          suites.sort((a, b) => a.name.localeCompare(b.name, 'en'));
          return { code: JSON.stringify({ testResults: suites }), map: null };
        }
      }],
      build: {
        sourcemap: false,
        rollupOptions: {
          cache: false,
          external: [/sb-preview\/runtime.js$/]
        }
      },
      resolve: {
        alias: {
          '@components': path.resolve(dirname, '../src/components'),
          '@root': path.resolve(dirname, '../'),
          'path': 'path-browserify'
        }
      }
    });
  },

  plugins: [react()],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: 'sb-theme-switcher',
      options: {
        themes: [
          {
            id: 'light',
            title: 'Светлая',
            class: 'light-theme',
            storybookTheme: storybookLightTheme
          },
          {
            id: 'dark',
            title: 'Темная',
            class: 'dark-theme',
            storybookTheme: storybookDarkTheme
          }
        ],
        storageKey: 'nlmk-storybook-theme',
        labels: {
          switchTheme: 'Переключить тему',
          selectTheme: 'Выбрать тему',
          switchToTheme: 'Переключить на тему {theme}'
        }
      }
    }
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  features: {
    interactionsDebugger: true
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      fileSystemCache: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false
    }
  }
};

import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath, URL } from 'url';
import { storybookLightTheme, storybookDarkTheme } from './storybookTheme.js';

const dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  async viteFinal(config) {
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 2400;
    }
    return {
      ...config,
      base: './',
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
    };
  },

  plugins: [react()],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
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
        defaultTheme: 'light',
        storageKey: 'nlmk-storybook-theme'
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
    reactDocgen: 'react-docgen-typescript'
  }
};

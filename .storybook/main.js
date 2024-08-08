import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { fileURLToPath, URL } from 'url';

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

  plugins: [reactRefresh()],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/addon-actions',
    '@storybook/test',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-themes',
    '@storybook/addon-storysource'
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

const reactRefresh = require('@vitejs/plugin-react-refresh');
const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(tsx|mdx)'],

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
          '@components': path.resolve(__dirname, '../src/components'),
          '@root': path.resolve(__dirname, '../'),
          'path': require.resolve('path-browserify')
        }
      }
    };
  },

  plugins: [reactRefresh()],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/testing-library',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-themes',
    '@storybook/addon-storysource',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  features: {
    interactionsDebugger: true,
    storyStoreV7: true
  },

  docs: {
    autodocs: true
  }
};

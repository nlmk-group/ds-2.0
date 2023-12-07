
const reactRefresh = require('@vitejs/plugin-react-refresh');
const path = require('path');

module.exports = {
  staticDirs: ['../public'],
  core: { builder: '@storybook/builder-vite' },
  stories: ['../src/**/*.stories.(mdx|tsx)'],
  async viteFinal(config) {
    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 2400
    }
    return {
      ...config,
      base: "./",
      build: {
        sourcemap: false,
        rollupOptions: {
          cache: false
        }
      },
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components'),
          '@root': path.resolve(__dirname, '../'),
          path: require.resolve('path-browserify')
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
    'storybook-addon-designs',    
    'storybook-dark-mode',    
    '@storybook/addon-storysource',
  ]
};

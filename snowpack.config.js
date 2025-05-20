const MODULES = [
  'react',
  'react-dom',
  'react-helmet-async',
  '@codesandbox/nodebox',
  '@storybook/addon-actions',
  '@storybook/blocks',
  'clsx',
  'date-fns',
  'flat',
  'lodash',
  'react-beautiful-dnd',
  'react-input-mask',
  'react-is',
  'react-popper',
  'react-tooltip',
  'react-transition-group'
];
const EXTERNAL_MODULES = process.env.NODE_ENV !== 'production' ? [] : MODULES;

module.exports = {
  exclude: ['**/_stories/**/*', '**/*.html', '**/img/**/*', '**/generateIconsExports.ts'],
  buildOptions: {
    out: 'lib'
  },
  packageOptions: {
    external: EXTERNAL_MODULES
  },
  mount: {
    // directory name: 'build directory'
    public: { url: '/', static: true },
    src: '/dist'
  },
  devOptions: {
    open: 'none'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-sass',
    'snowpack-plugin-svgr',
    './script/snowpackPluginRenameColon.js'
  ],
  alias: {
    '@components': './src/components',
    '@root': './'
  }
};

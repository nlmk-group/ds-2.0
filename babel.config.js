'use strict';
/**
babel.config.js with useful plugins.
*/
module.exports = function (api) {
  api.cache(true);
  api.assertVersion('^7.4.5');

  const env = {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime'
      ]
    }
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
          node: true
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];
  const plugins = [
    'const-enum',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
  ];

  return {
    env,
    presets,
    plugins
  };
};

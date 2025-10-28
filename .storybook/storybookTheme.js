import { create } from 'storybook/theming';

const brand = {
  brandTitle: 'Дизайн Система NLMK',
  brandUrl: 'https://nlmk-group.github.io/ds-2.0',
  brandImage: 'img/logo.svg',
  brandTarget: '_self'
};

export const storybookLightTheme = create({
  base: 'light',
  colorPrimary: '#167FFB',
  colorSecondary: '#167FFB',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#EDEEEF',
  appBorderColor: '#D6DADD',
  appBorderRadius: 4,

  // Typography
  fontBase: '"PTRootUIWeb", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#001739',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#40515E',
  barSelectedColor: '#167FFB',
  barBg: '#EDEEEF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CCD1D4',
  inputTextColor: '#909090',
  inputBorderRadius: 4,

  ...brand
});

export const storybookDarkTheme = create({
  base: 'dark',
  colorPrimary: '#2A8CFF',
  colorSecondary: '#2A8CFF',

  // UI
  appBg: '#455161',
  appContentBg: '#455161ff',
  appBorderColor: '#6C7581',
  appBorderRadius: 4,

  // Typography
  fontBase: '"PTRootUIWeb", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#001739',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#2A8CFF',
  barBg: '#455161',

  // Form colors
  inputBg: '#455161ff',
  inputBorder: '#7A879B',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  ...brand
});

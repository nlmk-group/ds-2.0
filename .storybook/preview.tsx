import { withTests } from '@storybook/addon-jest';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import results from '../.jest-test-results.json';
import { name, version } from '../package.json';
import '../public/css/main.css';
import { getSystemTheme } from '../src/components/Theme/utils';
import DocsThemeContainer from './Docs';
import { storybookDarkTheme, storybookLightTheme } from './storybookTheme';
const header = window.parent.document.querySelector('.sidebar-header');
const div = document.createElement('div');
div.style.cssText = `
  font-size: 12px;
  position: fixed;
  background: #e8e8e8;
  border-radius: 2px;
  padding: 3px;
  bottom: 10px;
  z-index: 9;
  color: dimgrey;
  left: 10px;
`;
div.innerHTML = `<code>${name} - v.${version}</code>`;
header?.append(div);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: false,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  knobs: {
    disable: true
  },
  layout: 'centered',
  darkMode: {
    dark: storybookDarkTheme,
    light: storybookLightTheme,
    current: getSystemTheme()
  },
  backgrounds: {
    default: 'default',
    values: [
      { name: 'default', value: 'var(--background-default, #3c4854)' },
      { name: 'info', value: 'var(--background-info, #636f7f)'},
      { name: 'blue', value: 'var(--background-blue, #4c5f73)'}
    ]
  },
  docs: { container: DocsThemeContainer },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    showNav: true,
    isFullscreen: false,
    isToolshown: true,
    storySort: {
      order: ['Introduction', ['Welcome', 'Changelog', '*'], 'Components', ['*', ['Info', 'Overview', 'Stories']]]
    }
  },
  // Disables Chromatic's snapshotting on a global level
  chromatic: { disableSnapshot: true }
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light-theme',
      dark: 'dark-theme'
    },
    defaultTheme: getSystemTheme()
  }),
  withTests({
    results
  })
];

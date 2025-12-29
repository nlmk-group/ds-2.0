import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { name, version } from '../package.json';
import '../public/css/main.css';
import DocsThemeContainer from './Docs';
import { storybookLightTheme } from './storybookTheme';

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

const THEME_KEY = 'nlmk-storybook-theme';
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  const isDark = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'dark-theme' : 'light-theme');
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark-theme' : 'light-theme');
}

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
  backgrounds: {
    options: {
      default: { name: 'default', value: 'var(--steel-10, #455161)' },
      info: { name: 'info', value: 'var(--background-info, #636f7f)' },
      blue: { name: 'blue', value: 'var(--background-blue, #4c5f73)' }
    }
  },
  docs: {
    container: DocsThemeContainer,
    theme: storybookLightTheme
  },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    showNav: true,
    isFullscreen: false,
    isToolshown: true,
    storySort: {
      order: [
        'Introduction',
        ['Welcome', 'Changelog', '*'],
        'Table',
        'Components',
        ['*', ['Info', 'Overview', 'Stories']]
      ]
    }
  },
  // Disables Chromatic's snapshotting on a global level
  chromatic: { disableSnapshot: true }
};

export const decorators = [
  Story => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
];
export const tags = ['autodocs'];

export const initialGlobals = {
  backgrounds: {
    value: 'default'
  }
};

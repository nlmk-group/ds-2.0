import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import type { ArgTypesEnhancer } from 'storybook/internal/types';

import '../public/css/main.css';
import { isStyleProp } from '../src/components/_storybook/ArgumentsTable/isStyleProp';
import PreviewSkeleton from '../src/components/_storybook/PreviewSkeleton';
import { storybookLightTheme } from './storybookTheme';

type DocsModule = typeof import('sb-theme-switcher/docs');
let docsModule: DocsModule | undefined;
const loadDocs = () =>
  import('sb-theme-switcher/docs').then(module => {
    docsModule = module;
    return { default: module.DocsContainer };
  });
const LazyDocsContainer = React.lazy(loadDocs);
if (new URLSearchParams(window.location.search).get('viewMode') === 'docs') {
  void loadDocs().catch(() => {
    /* React retries the import when rendering documentation. */
  });
}

export const argTypesEnhancers: ArgTypesEnhancer[] = [
  ({ argTypes, title }) =>
    Object.fromEntries(
      Object.entries(argTypes).map(([key, arg]) => [
        key,
        isStyleProp(key, arg, title.split('/')[1]) ? { ...arg, control: false, table: { ...arg.table, disable: true } } : arg
      ])
    )
];

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
    // Темы берутся автоматически из опций аддона sb-theme-switcher (main.js)
    container: (props: React.ComponentProps<DocsModule['DocsContainer']>) =>
      docsModule ? (
        <docsModule.DocsContainer {...props} />
      ) : (
        <React.Suspense fallback={<PreviewSkeleton kind="docs" />}>
          <LazyDocsContainer {...props} />
        </React.Suspense>
      ),
    source: { type: 'code' },
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
        ['Welcome', 'Changelog', '*', 'Z-Index'],
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
  (Story: React.ComponentType) => (
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

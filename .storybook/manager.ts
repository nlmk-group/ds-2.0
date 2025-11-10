import React, { useState } from 'react';

import { addons, types } from 'storybook/manager-api';

import { storybookDarkTheme, storybookLightTheme } from './storybookTheme';

const SunIcon = () =>
  React.createElement(
    'svg',
    {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { display: 'block' }
    },
    React.createElement('path', {
      fill: 'currentColor',
      d: 'M8 6.09c1.05 0 1.91.86 1.91 1.91 0 1.05-.86 1.91-1.91 1.91-1.05 0-1.91-.86-1.91-1.91 0-1.05.86-1.91 1.91-1.91Zm0-1.272a3.183 3.183 0 0 0 0 6.364 3.183 3.183 0 0 0 0-6.364ZM1.636 8.636H2.91c.35 0 .636-.286.636-.636a.638.638 0 0 0-.636-.636H1.636A.638.638 0 0 0 1 8c0 .35.286.636.636.636Zm11.455 0h1.273c.35 0 .636-.286.636-.636a.638.638 0 0 0-.636-.636H13.09a.638.638 0 0 0-.636.636c0 .35.286.636.636.636Zm-5.727-7V2.91c0 .35.286.636.636.636.35 0 .636-.286.636-.636V1.636A.638.638 0 0 0 8 1a.638.638 0 0 0-.636.636Zm0 11.455v1.273c0 .35.286.636.636.636.35 0 .636-.286.636-.636V13.09A.638.638 0 0 0 8 12.455a.638.638 0 0 0-.636.636ZM4.175 3.278a.634.634 0 1 0-.897.897l.675.675a.634.634 0 1 0 .897-.897l-.675-.675Zm7.872 7.872a.634.634 0 1 0-.897.897l.675.675a.634.634 0 1 0 .897-.897l-.675-.675Zm.675-6.975a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .897.897l.675-.675ZM4.85 12.047a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .897.897l.675-.675Z'
    })
  );

const MoonIcon = () =>
  React.createElement(
    'svg',
    {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { display: 'block' }
    },
    React.createElement('path', {
      fill: 'currentColor',
      d: 'M6.282 3.76a4.84 4.84 0 0 0 5.958 5.958A4.582 4.582 0 0 1 8 12.573 4.578 4.578 0 0 1 3.427 8a4.582 4.582 0 0 1 2.855-4.24ZM8 2.12a5.88 5.88 0 1 0 5.814 4.992 3.53 3.53 0 1 1-4.926-4.926A6.612 6.612 0 0 0 8 2.12Z'
    })
  );

const THEME_KEY = 'nlmk-storybook-theme';

const applyManagerTheme = (isDark: boolean) => {
  addons.setConfig({
    theme: isDark ? storybookDarkTheme : storybookLightTheme
  });

  if (isDark) {
    document.body.classList.add('dark');
    document.documentElement.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
  }
};

const applyPreviewTheme = (isDark: boolean) => {
  const previewIframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
  if (previewIframe && previewIframe.contentWindow) {
    const previewDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    if (previewDoc) {
      const html = previewDoc.documentElement;
      html.setAttribute('data-theme', isDark ? 'dark-theme' : 'light-theme');
    }
  }
};

const isDarkTheme = localStorage.getItem(THEME_KEY) === 'dark';
applyManagerTheme(isDarkTheme);
setTimeout(() => applyPreviewTheme(isDarkTheme), 1000);

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem(THEME_KEY) === 'dark');

  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem(THEME_KEY, newIsDark ? 'dark' : 'light');
    applyManagerTheme(newIsDark);
    applyPreviewTheme(newIsDark);
  };

  return React.createElement(
    'button',
    {
      'key': 'theme-toggle',
      'title': isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему',
      'onClick': handleToggle,
      'aria-label': isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему',
      'style': {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit',
        outline: 'none',
        borderRadius: '4px',
        transition: 'background 0.2s ease, transform 0.1s ease, opacity 0.2s ease',
        height: '28px',
        minWidth: '28px',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        opacity: 1
      },
      'onMouseEnter': (e: any) => {
        e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.opacity = '0.8';
      },
      'onMouseLeave': (e: any) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.opacity = '1';
      },
      'onMouseDown': (e: any) => {
        e.currentTarget.style.transform = 'scale(0.9)';
      },
      'onMouseUp': (e: any) => {
        e.currentTarget.style.transform = 'scale(1)';
      }
    },
    isDark ? React.createElement(SunIcon) : React.createElement(MoonIcon)
  );
};

const ADDON_ID = 'nlmk-theme-toggle';
const TOOL_ID = `${ADDON_ID}/tool`;

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Переключить тему',
    match: () => true,
    render: () => React.createElement(ThemeToggleButton)
  });
});

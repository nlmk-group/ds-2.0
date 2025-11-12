import React, { memo, useState } from 'react';

import { addons, types } from 'storybook/manager-api';

import { storybookDarkTheme, storybookLightTheme } from './storybookTheme';

const SunIcon = memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      fill="currentColor"
      d="M8 6.09c1.05 0 1.91.86 1.91 1.91 0 1.05-.86 1.91-1.91 1.91-1.05 0-1.91-.86-1.91-1.91 0-1.05.86-1.91 1.91-1.91Zm0-1.272a3.183 3.183 0 0 0 0 6.364 3.183 3.183 0 0 0 0-6.364ZM1.636 8.636H2.91c.35 0 .636-.286.636-.636a.638.638 0 0 0-.636-.636H1.636A.638.638 0 0 0 1 8c0 .35.286.636.636.636Zm11.455 0h1.273c.35 0 .636-.286.636-.636a.638.638 0 0 0-.636-.636H13.09a.638.638 0 0 0-.636.636c0 .35.286.636.636.636Zm-5.727-7V2.91c0 .35.286.636.636.636.35 0 .636-.286.636-.636V1.636A.638.638 0 0 0 8 1a.638.638 0 0 0-.636.636Zm0 11.455v1.273c0 .35.286.636.636.636.35 0 .636-.286.636-.636V13.09A.638.638 0 0 0 8 12.455a.638.638 0 0 0-.636.636ZM4.175 3.278a.634.634 0 1 0-.897.897l.675.675a.634.634 0 1 0 .897-.897l-.675-.675Zm7.872 7.872a.634.634 0 1 0-.897.897l.675.675a.634.634 0 1 0 .897-.897l-.675-.675Zm.675-6.975a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .897.897l.675-.675ZM4.85 12.047a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .897.897l.675-.675Z"
    />
  </svg>
));

const MoonIcon = memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      fill="currentColor"
      d="M6.282 3.76a4.84 4.84 0 0 0 5.958 5.958A4.582 4.582 0 0 1 8 12.573 4.578 4.578 0 0 1 3.427 8a4.582 4.582 0 0 1 2.855-4.24ZM8 2.12a5.88 5.88 0 1 0 5.814 4.992 3.53 3.53 0 1 1-4.926-4.926A6.612 6.612 0 0 0 8 2.12Z"
    />
  </svg>
));

SunIcon.displayName = 'SunIcon';
MoonIcon.displayName = 'MoonIcon';

const THEME_KEY = 'nlmk-storybook-theme';

const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved !== null) {
    return saved === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyManagerTheme = (isDark: boolean) => {
  addons.setConfig({
    theme: isDark ? storybookDarkTheme : storybookLightTheme
  });

  document.body.classList.toggle('dark', isDark);
  document.documentElement.classList.toggle('dark', isDark);
};

const applyPreviewTheme = (isDark: boolean) => {
  const previewIframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
  if (previewIframe?.contentWindow) {
    const previewDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    if (previewDoc) {
      previewDoc.documentElement.setAttribute('data-theme', isDark ? 'dark-theme' : 'light-theme');
    }
  }
};

const isDarkTheme = getInitialTheme();
applyManagerTheme(isDarkTheme);
setTimeout(() => applyPreviewTheme(isDarkTheme), 1000);

const observePreviewIframe = () => {
  let lastIframe: HTMLIFrameElement | null = null;

  const applyThemeToIframe = (iframe: HTMLIFrameElement) => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

    const checkTheme = () => {
      const previewDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (previewDoc?.documentElement) {
        const currentTheme = previewDoc.documentElement.getAttribute('data-theme');
        const expectedTheme = shouldBeDark ? 'dark-theme' : 'light-theme';
        if (currentTheme !== expectedTheme) {
          applyPreviewTheme(shouldBeDark);
        }
      }
    };

    checkTheme();
    iframe.addEventListener('load', checkTheme);
  };

  const observer = new MutationObserver(() => {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
    if (iframe && iframe !== lastIframe) {
      lastIframe = iframe;
      applyThemeToIframe(iframe);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const initialIframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
  if (initialIframe) {
    lastIframe = initialIframe;
    applyThemeToIframe(initialIframe);
  }
};

observePreviewIframe();

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem(THEME_KEY, newIsDark ? 'dark' : 'light');
    applyManagerTheme(newIsDark);
    applyPreviewTheme(newIsDark);
  };

  const toggleLabel = `Переключить на ${isDark ? 'светлую' : 'темную'} тему`;

  return (
    <button
      key="theme-toggle"
      title={toggleLabel}
      onClick={handleToggle}
      aria-label={toggleLabel}
      style={{
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
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.opacity = '1';
      }}
      onMouseDown={e => {
        e.currentTarget.style.transform = 'scale(0.9)';
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const ADDON_ID = 'nlmk-theme-toggle';
const TOOL_ID = `${ADDON_ID}/tool`;

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Переключить тему',
    match: () => true,
    render: () => <ThemeToggleButton />
  });
});

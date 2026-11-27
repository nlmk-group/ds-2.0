import { useSyncExternalStore } from 'react';

import { Themes } from '@components/Theme/types';

const readTheme = () => (document.documentElement.dataset.theme === 'dark-theme' ? Themes.DARK : Themes.LIGHT);

const subscribeToTheme = (notify: () => void) => {
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};

export const usePreviewTheme = () => useSyncExternalStore(subscribeToTheme, readTheme, () => Themes.LIGHT);

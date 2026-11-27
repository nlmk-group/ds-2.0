import { useEffect, useState } from 'react';

import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';

import { Themes } from '../types';

export type ThemeStorage = 'session' | 'local';
const query = '(prefers-color-scheme: dark)';

const getStorage = (mode: ThemeStorage) => (mode === 'local' ? window.localStorage : window.sessionStorage);

const readPreference = (mode: ThemeStorage) => {
  try {
    const saved = getStorage(mode).getItem('theme');
    return saved === Themes.DARK || saved === Themes.LIGHT ? saved : null;
  } catch {
    return null;
  }
};

export const useThemeSwitcher = (customTheme?: Themes, storage: ThemeStorage = 'session') => {
  const [preference, setPreference] = useState(() => customTheme ?? readPreference(storage));
  const [systemTheme, setSystemTheme] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia?.(query).matches ? Themes.DARK : Themes.LIGHT
  );
  const theme = preference ?? systemTheme;

  useEffect(() => {
    setPreference(customTheme ?? readPreference(storage));
    const onStorage = (event: StorageEvent) => {
      if ((event.key === 'theme' || event.key === null) && event.storageArea === getStorage(storage)) {
        setPreference(customTheme ?? readPreference(storage));
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [customTheme, storage]);

  useEffect(() => {
    const media = window.matchMedia?.(query);
    if (!media) return;
    const sync = () => setSystemTheme(media.matches ? Themes.DARK : Themes.LIGHT);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (theme !== Themes.DARK) return;
    const style = document.createElement('style');
    style.id = 'dark';
    style.textContent = darkThemeStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, [theme]);

  const updatePreference = (next: Themes | null) => {
    setPreference(next);
    try {
      const target = getStorage(storage);
      if (next === null) target.removeItem('theme');
      else target.setItem('theme', next);
    } catch {
      // Keep the in-memory choice when browser storage is unavailable.
    }
  };

  return {
    theme,
    toggleTheme: () => updatePreference(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT),
    resetToSystem: () => updatePreference(null),
    isSystem: preference === null
  };
};

import { useEffect, useState } from 'react';

import { darkThemeStyles } from '@components/ThemeSwitcher/DarkTheme';

import { Theme, Themes } from '../types';

const tagName = 'style';

export const useThemeSwitcher = (customTheme?: Themes) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (customTheme) {
      return customTheme;
    }

    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme === Themes.DARK || savedTheme === Themes.LIGHT) {
      return savedTheme as Theme;
    }

    return Themes.LIGHT;
  });

  useEffect(() => {
    if (customTheme) {
      setTheme(customTheme);
    }
  }, [customTheme]);

  useEffect(() => {
    const addStyle = (styles: string) => {
      const styleSheet = document.createElement(tagName);
      styleSheet.id = theme;
      styleSheet.innerText = styles.replace(/\n/g, '');
      document.head.appendChild(styleSheet);
    };

    if (theme === 'dark') {
      addStyle(darkThemeStyles);
    } else {
      const styleElement = document.getElementById('dark');
      if (styleElement) {
        styleElement.remove();
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

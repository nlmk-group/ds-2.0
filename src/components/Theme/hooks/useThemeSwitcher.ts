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
    // Удаляем все элементы стилей тёмной темы (в т.ч. дубликаты от двойного маунта в React Strict Mode)
    document.querySelectorAll('#dark').forEach((el) => el.remove());

    if (theme === 'dark') {
      const styleSheet = document.createElement(tagName);
      styleSheet.id = 'dark';
      styleSheet.innerText = darkThemeStyles.replace(/\n/g, '');
      document.head.appendChild(styleSheet);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    setTheme(newTheme);
    sessionStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

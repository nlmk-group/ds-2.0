import { useLayoutEffect, useState } from 'react';

/**
 * Возвращает тему из html attribute
 */
const useRootAttributeTheme = (): string => {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme ?? 'light');
    });
    observer.observe(root, { attributeFilter: ['data-theme'] });
  }, []);

  return theme;
};

export default useRootAttributeTheme;

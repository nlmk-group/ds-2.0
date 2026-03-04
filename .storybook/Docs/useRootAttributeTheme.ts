import { useLayoutEffect, useState } from 'react';

/**
 * Возвращает тему из html attribute
 */
const useRootAttributeTheme = (): string => {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme ?? 'light';
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    
    setTheme(root.dataset.theme ?? 'light');
    
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme ?? 'light');
    });
    observer.observe(root, { attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  return theme;
};

export default useRootAttributeTheme;

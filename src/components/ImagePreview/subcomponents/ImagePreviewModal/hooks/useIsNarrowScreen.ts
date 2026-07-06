import { useEffect, useMemo, useState } from 'react';

/**
 * Хук useMediaQuery подписывается на CSS media query через window.matchMedia
 * и возвращает текущее состояние совпадения (matches).
 *
 * @param {string} query - Media query строка, например "(max-width: 1000px)".
 *
 * @returns {boolean} matches - true, если media query сейчас совпадает, иначе false.
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    mql.onchange = onChange;
    return () => {
      mql.onchange = null;
    };
  }, [query]);

  return matches;
};

/**
 * Хук useIsNarrowScreen проверяет, является ли экран "узким" по заданной максимальной ширине.
 * Строит query вида "(max-width: Npx)" и использует useMediaQuery.
 *
 * @param {number} [maxWidthPx=1000] - Максимальная ширина экрана в px, при которой считается "узким".
 *
 * @returns {boolean} isNarrow - true, если ширина экрана <= maxWidthPx, иначе false.
 */
export const useIsNarrowScreen = (maxWidthPx = 1000) => {
  const query = useMemo(() => `(max-width: ${maxWidthPx}px)`, [maxWidthPx]);
  return useMediaQuery(query);
};

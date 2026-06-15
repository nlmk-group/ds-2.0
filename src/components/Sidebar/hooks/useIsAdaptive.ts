import { useEffect, useState } from 'react';

import { SIDEBAR_ADAPTIVE_BREAKPOINT } from '../constants';

/**
 * Хук useIsAdaptive определяет, находится ли вьюпорт в адаптивном режиме
 * (ширина <= breakpoint) через window.matchMedia и реактивно обновляется
 * при изменении ширины окна.
 *
 * @param {number} [breakpoint=SIDEBAR_ADAPTIVE_BREAKPOINT] - Порог ширины в px.
 * @returns {boolean} isAdaptive - true, если вьюпорт уже порога, иначе false.
 */
export const useIsAdaptive = (breakpoint: number = SIDEBAR_ADAPTIVE_BREAKPOINT): boolean => {
  const query = `(max-width: ${breakpoint}px)`;

  const [isAdaptive, setIsAdaptive] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    const onChange = () => setIsAdaptive(mql.matches);

    onChange();

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    const legacy = mql as unknown as {
      addListener: (cb: () => void) => void;
      removeListener: (cb: () => void) => void;
    };
    legacy.addListener(onChange);
    return () => legacy.removeListener(onChange);
  }, [query]);

  return isAdaptive;
};

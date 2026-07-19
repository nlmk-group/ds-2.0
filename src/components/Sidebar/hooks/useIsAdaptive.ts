import { useCallback, useSyncExternalStore } from 'react';

import { SIDEBAR_ADAPTIVE_BREAKPOINT } from '../constants';

const getMediaQuery = (breakpoint: number): string => `(max-width: ${breakpoint}px)`;

const getSnapshot = (breakpoint: number): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(getMediaQuery(breakpoint)).matches;
};

const subscribe = (breakpoint: number, onStoreChange: () => void): (() => void) => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => {};
  }

  const mediaQueryList = window.matchMedia(getMediaQuery(breakpoint));

  if (typeof mediaQueryList.addEventListener === 'function') {
    mediaQueryList.addEventListener('change', onStoreChange);

    return () => mediaQueryList.removeEventListener('change', onStoreChange);
  }

  mediaQueryList.addListener(onStoreChange);

  return () => mediaQueryList.removeListener(onStoreChange);
};

/**
 * Хук useIsAdaptive определяет, находится ли вьюпорт в адаптивном режиме
 * (ширина <= breakpoint) через window.matchMedia и реактивно обновляется
 * при изменении ширины окна.
 *
 * @param {number} [breakpoint=SIDEBAR_ADAPTIVE_BREAKPOINT] - Порог ширины в px.
 * @returns {boolean} true, если ширина вьюпорта меньше или равна порогу, иначе false.
 */
export const useIsAdaptive = (breakpoint: number = SIDEBAR_ADAPTIVE_BREAKPOINT): boolean => {
  const subscribeToMediaQuery = useCallback(
    (onStoreChange: () => void) => subscribe(breakpoint, onStoreChange),
    [breakpoint]
  );

  return useSyncExternalStore(
    subscribeToMediaQuery,
    () => getSnapshot(breakpoint),
    () => false
  );
};

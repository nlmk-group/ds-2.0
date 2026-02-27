import { useEffect, useState } from 'react';

const MOBILE_BP = 1000;

/**
 * Хук useIsMobile определяет, находится ли viewport в mobile-режиме по media query и
 * подписывается на изменения ширины окна, чтобы возвращаемое значение обновлялось реактивно.
 *
 * @returns {boolean} isMobile - true, если ширина окна меньше или равна MOBILE_BP, иначе false.
 */

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(`(max-width: ${MOBILE_BP}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq: MediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BP}px)`);
    const onChange = () => setIsMobile(mq.matches);

    onChange();

    if ('addEventListener' in mq) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }

    const legacy = mq as unknown as {
      addListener: (cb: () => void) => void;
      removeListener: (cb: () => void) => void;
    };

    legacy.addListener(onChange);
    return () => legacy.removeListener(onChange);
  }, []);

  return isMobile;
};

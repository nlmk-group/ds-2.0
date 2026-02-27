import { RefObject, useLayoutEffect } from 'react';

type Args = {
  stageScrollRef: RefObject<HTMLElement | null>;
  activeIndex: number;
  fullSrc?: string;
  isMobile: boolean;
  isZoomed: boolean;
};

/**
 * Хук useStageResetOnImageChange сбрасывает скролл контейнера сцены при смене изображения.
 * Работает только в desktop-режиме и только когда зум выключен, чтобы не ломать панорамирование.
 *
 * @param {object} args - Параметры хука.
 * @param {React.RefObject<HTMLElement | null>} args.stageScrollRef - Ref на scroll-контейнер сцены.
 * @param {number} args.activeIndex - Активный индекс (триггер сброса при смене).
 * @param {string} args.fullSrc - URL полного изображения (доп. триггер сброса при смене src).
 * @param {boolean} args.isMobile - Признак mobile-режима (на mobile сброс не выполняется).
 * @param {boolean} args.isZoomed - Признак активного зума (при true сброс не выполняется).
 */

export const useStageResetOnImageChange = ({
   stageScrollRef,
   activeIndex,
   fullSrc,
   isMobile,
   isZoomed
}: Args) => {
  useLayoutEffect(() => {
    const el = stageScrollRef.current;
    if (!el) return;
    if (isMobile) return;
    if (isZoomed) return;
    el.scrollLeft = 0;
    el.scrollTop = 0;
  }, [activeIndex, fullSrc, isMobile, isZoomed, stageScrollRef]);
};

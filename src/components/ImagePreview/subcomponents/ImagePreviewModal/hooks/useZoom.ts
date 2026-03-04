import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Хук useZoom управляет логикой зума изображения в модальном окне:
 * хранит состояние зума, вычисляет масштаб и переполнения, отдает refs на контейнер и img,
 * а также стили для CSS-переменных и обработчик wheel для панорамирования при зуме.
 *
 * @param {boolean} isMobile - Признак mobile-режима (в mobile зум отключается и сбрасывается).
 * @param {number} activeIndex - Активный индекс (при смене сбрасывает состояние зума и скролла).
 *
 * @returns {object} result - Результат хука.
 * @returns {React.MutableRefObject<HTMLDivElement | null>} result.stageScrollRef - Ref на scroll-контейнер сцены.
 * @returns {React.MutableRefObject<HTMLImageElement | null>} result.imgRef - Ref на элемент <img>.
 * @returns {boolean} result.isZoomed - Активен ли зум.
 * @returns {{ x: boolean; y: boolean }} result.zoomOverflow - Есть ли переполнение по осям при текущем масштабе.
 * @returns {() => void} result.updateZoomLayout - Пересчет масштаба и переполнений по размерам контейнера и изображения.
 * @returns {React.CSSProperties} result.zoomImageStyles - CSS-переменные для масштаба и origin зума.
 * @returns {React.WheelEventHandler} result.onZoomBtnWheel - Перехват wheel для прокрутки сцены при активном зуме (desktop).
 * @returns {() => void} result.toggleZoom - Переключение состояния зума.
 */

export const useZoom = (isMobile: boolean, activeIndex: number) => {
  const stageScrollRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomOverflow, setZoomOverflow] = useState({ x: false, y: false });

  const updateZoomLayout = () => {
    const container = stageScrollRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const nw = img.naturalWidth || img.width;
    const nh = img.naturalHeight || img.height;

    if (!nw || !nh || !cw || !ch) return;

    const fitScale = Math.min(cw / nw, ch / nh);
    const scale = Math.max(1, fitScale);

    setZoomScale(scale);

    const overflowX = nw * scale > cw + 1;
    const overflowY = nh * scale > ch + 1;

    setZoomOverflow({ x: overflowX, y: overflowY });
  };

  const zoomImageStyles = useMemo(() => {
    const needsTopLeft = isZoomed && (zoomOverflow.x || zoomOverflow.y);
    const zoomOrigin = needsTopLeft ? 'top left' : 'center';

    return {
      '--ip-zoom-scale': String(zoomScale),
      '--ip-zoom-origin': zoomOrigin
    } as React.CSSProperties;
  }, [zoomScale, isZoomed, zoomOverflow.x, zoomOverflow.y]);

  const onZoomBtnWheel: React.WheelEventHandler = e => {
    if (isMobile || !isZoomed) return;

    const scroller = stageScrollRef.current;
    if (!scroller) return;

    e.preventDefault();
    e.stopPropagation();

    scroller.scrollBy({
      left: e.deltaX,
      top: e.deltaY,
      behavior: 'auto'
    });
  };

  const toggleZoom = () => setIsZoomed(v => !v);

  useEffect(() => {
    setIsZoomed(false);
    setZoomOverflow({ x: false, y: false });
    setZoomScale(1);
    stageScrollRef.current?.scrollTo({ top: 0, left: 0 });
  }, [activeIndex]);

  useEffect(() => {
    if (!isMobile) return;

    setIsZoomed(false);
    setZoomOverflow({ x: false, y: false });
    setZoomScale(1);
    stageScrollRef.current?.scrollTo({ top: 0, left: 0 });
  }, [isMobile]);

  useEffect(() => {
    if (!isZoomed || isMobile) {
      setZoomOverflow({ x: false, y: false });
      setZoomScale(1);
      stageScrollRef.current?.scrollTo({ top: 0, left: 0 });
      return;
    }

    const raf = requestAnimationFrame(() => {
      updateZoomLayout();
      stageScrollRef.current?.scrollTo({ top: 0, left: 0 });
    });

    return () => cancelAnimationFrame(raf);
  }, [isZoomed, activeIndex, isMobile]);

  useEffect(() => {
    if (!isZoomed || isMobile) return;

    const onResize = () => updateZoomLayout();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [isZoomed, isMobile]);

  return {
    stageScrollRef,
    imgRef,
    isZoomed,
    zoomOverflow,
    updateZoomLayout,
    zoomImageStyles,
    onZoomBtnWheel,
    toggleZoom
  }
}

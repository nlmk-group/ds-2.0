import { useEffect, useMemo, useState } from 'react';

type Params = {
  activeIndex: number;
  fullSrc: string;
  previewSrc?: string;
  isMobile: boolean;
  isZoomed: boolean;
  updateZoomLayout: () => void;
};

/**
 * Хук загрузки изображения для модального окна.
 *
 * Предзагружает `fullSrc` через `new Image()` и (если доступно) `HTMLImageElement.decode()`,
 * управляет состояниями загрузки/ошибки, и выбирает `shownSrc`:
 * - пока full не готов: показывает `previewSrc` (если есть),
 * - когда full готов: переключается на `fullSrc`.
 *
 * @param params
 * @param params.activeIndex Индекс активного изображения (используется как триггер перезагрузки).
 * @param params.fullSrc URL полноразмерного изображения.
 * @param params.previewSrc URL превью (показывается, пока `fullSrc` не готов).
 * @param params.isMobile Флаг мобильного режима (на мобиле зум-лейаут не пересчитывается).
 * @param params.isZoomed Флаг активного зума.
 * @param params.updateZoomLayout Колбэк пересчёта размеров/скролла для зума.
 *
 * @returns Состояния и обработчики:
 * - `imgError`: была ли ошибка загрузки текущего изображения,
 * - `isLoading`: идёт ли загрузка `fullSrc`,
 * - `isFullReady`: готов ли `fullSrc` (включая успешный decode, если он поддерживается),
 * - `shownSrc`: какой `src` следует подставить в `<img>` сейчас,
 * - `showImg`: можно ли рендерить `<img>` (есть `shownSrc` и нет ошибки),
 * - `renderToken`: токен для ключа/перерендера при смене картинки,
 * - `onImgLoad`: обработчик `onLoad` для `<img>`,
 * - `onImgError`: обработчик `onError` для `<img>`.
 */

export const useImageLoad = ({ activeIndex, fullSrc, previewSrc, isMobile, isZoomed, updateZoomLayout }: Params) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullReady, setIsFullReady] = useState(false);
  const [renderToken, setRenderToken] = useState(0);

  useEffect(() => {
    setRenderToken(t => t + 1);
  }, [activeIndex, fullSrc]);

  useEffect(() => {
    setImgError(false);
    setIsFullReady(false);

    if (!fullSrc) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    const img = new Image();
    img.decoding = 'async';
    img.src = fullSrc;

    const finishOk = async () => {
      try {
        if ('decode' in img) await (img as any).decode();
      } catch {}
      if (cancelled) return;
      setIsLoading(false);
      setIsFullReady(true);
      setImgError(false);
    };

    img.onload = () => void finishOk();

    img.onerror = () => {
      if (cancelled) return;
      setIsLoading(false);
      setIsFullReady(false);
      setImgError(true);
    };

    return () => {
      cancelled = true;
    };
  }, [activeIndex, fullSrc]);

  const shownSrc = useMemo(() => {
    if (!fullSrc) return '';
    if (isFullReady) return fullSrc;
    return previewSrc ?? '';
  }, [fullSrc, previewSrc, isFullReady]);

  const showImg = !!shownSrc && !imgError;

  const onImgLoad = () => {
    if (!isMobile && isZoomed && isFullReady && shownSrc === fullSrc) updateZoomLayout();
  };

  const onImgError = () => {
    if (shownSrc === fullSrc) {
      setImgError(true);
      setIsLoading(false);
      setIsFullReady(false);
    }
  };

  return {
    imgError,
    isLoading,
    isFullReady,
    shownSrc,
    showImg,
    renderToken,
    onImgLoad,
    onImgError
  };
};

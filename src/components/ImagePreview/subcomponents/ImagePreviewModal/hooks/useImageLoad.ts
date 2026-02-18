import { useEffect, useMemo, useState } from 'react';

type Params = {
  activeIndex: number;
  fullSrc: string;
  previewSrc?: string;
  isMobile: boolean;
  isZoomed: boolean;
  updateZoomLayout: () => void;
};

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

import { useLayoutEffect, useRef, useState } from 'react';

export const useTruncate = (previewImgSize: number, previewTitle?: string) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const titleWrapRef = useRef<HTMLSpanElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const wrap = titleWrapRef.current;
    const meas = measureRef.current;

    if (!wrap || !meas || !previewTitle) {
      setIsTruncated(false);
      return;
    }

    const calc = () => {
      const w = wrap.clientWidth;
      if (w > 0) meas.style.width = `${w}px`;

      const full = meas.scrollHeight;
      const clamped = wrap.clientHeight;

      setIsTruncated(full > clamped + 1);
    };

    let raf1 = 0;
    let raf2 = 0;

    const measureStable = () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(calc);
      });
    };

    measureStable();

    const ro = new ResizeObserver(measureStable);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      ro.disconnect();
    };
  }, [previewTitle, previewImgSize]);

  return {
    isTruncated,
    titleWrapRef,
    measureRef
  };
};

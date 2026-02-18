import React, { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { IImageItem } from '../../types';
import styles from './ImagePreviewCarouselMobile.module.scss';

interface Props {
  items: IImageItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

const ImagePreviewCarouselMobile: FC<Props> = ({ items, activeIndex, setActiveIndex }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const cRect = container.getBoundingClientRect();
    const aRect = activeEl.getBoundingClientRect();

    const delta = (aRect.left + aRect.width / 2) - (cRect.left + cRect.width / 2);
    const nextLeft = container.scrollLeft + delta;

    container.scrollTo({ left: nextLeft, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div ref={containerRef} className={styles.carousel} data-ui-image-preview-carousel-mobile>
      {items.map((it, idx) => (
        <button
          key={String(it.id ?? idx)}
          ref={el => {
            itemRefs.current[idx] = el;
          }}
          type="button"
          className={clsx(styles.item, { [styles.active]: idx === activeIndex })}
          onClick={() => setActiveIndex(idx)}
          aria-label={it.alt ?? it.title ?? `Миниатюра ${idx + 1}`}
        >
          <img src={it.previewSrc} className={styles.thumb} alt={it.alt ?? it.title ?? `Миниатюра ${idx + 1}`} />
        </button>
      ))}
    </div>
  );
};

export default ImagePreviewCarouselMobile;

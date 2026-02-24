import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { IImageItem } from '../../types';
import styles from './ImagePreviewCarouselMobile.module.scss';
import { Box, Icon } from '@components/index';

interface IImagePreviewCarouselMobileProps {
  items: IImageItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

const ImagePreviewCarouselMobile = ({ items, activeIndex, setActiveIndex }: IImagePreviewCarouselMobileProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;

    const cRect = container.getBoundingClientRect();
    const aRect = activeEl.getBoundingClientRect();

    const delta =
      aRect.left + aRect.width / 2 - (cRect.left + cRect.width / 2);
    const nextLeft = container.scrollLeft + delta;

    container.scrollTo({ left: nextLeft, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <Box
      gap={4}
      p={16}
      ref={containerRef}
      className={styles['carousel']}
      data-ui-image-preview-carousel-mobile
    >
      {items.map((it, idx) => {
        const altText = it.alt ?? it.title ?? `Миниатюра ${idx + 1}`;
        return (
          <Box
            justifyContent="center"
            alignItems="center"
            key={String(it.id ?? idx)}
            ref={el => {
              itemRefs.current[idx] = el;
            }}
            className={clsx(styles['item'], { [styles['active']]: idx === activeIndex })}
            onClick={() => setActiveIndex(idx)}
            aria-label={altText}
          >
            {it.previewSrc && (
              <img src={it.previewSrc} className={styles['thumb']} alt={altText} />
            )}
            {!it.previewSrc && (
              <Box justifyContent="center" alignItems="center" height="100%">
                <Icon name="IconFactory32" htmlColor="var(--steel-50)" />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ImagePreviewCarouselMobile;

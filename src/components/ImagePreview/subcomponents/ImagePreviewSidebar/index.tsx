import React, { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';
import { Button, IconChevronArrowDownOutlined24, IconChevronArrowUpOutlined24 } from '@components/index';

import { IImageItem } from '../../types';

import styles from './ImagePreviewSidebar.module.scss';

interface IImagePreviewSidebarProps {
  items: IImageItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

const EPS = 2;

const ImagePreviewSidebar: FC<IImagePreviewSidebarProps> = ({ items, activeIndex, setActiveIndex }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  const [isOverflow, setIsOverflow] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const scrollStep = useMemo(() => {
    const itemMin = 112;
    const pad = 6;
    const gap = 10;
    return itemMin + pad + gap;
  }, []);

  const updateScrollState = () => {
    const el = carouselRef.current;
    if (!el) return;

    const overflow = el.scrollHeight > el.clientHeight + EPS;
    setIsOverflow(overflow);

    if (!overflow) {
      setCanScrollUp(false);
      setCanScrollDown(false);
      return;
    }

    const top = el.scrollTop;
    const maxTop = el.scrollHeight - el.clientHeight;

    setCanScrollUp(top > EPS); // первая картинка уже ушла вверх
    setCanScrollDown(top < maxTop - EPS); // последняя еще не видна
  };

  const scrollBy = (delta: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ top: delta, behavior: 'smooth' });
  };

  const ensureActiveVisible = () => {
    const container = carouselRef.current;
    const activeEl = activeBtnRef.current;
    if (!container || !activeEl) return;

    const pad = 8;

    const cRect = container.getBoundingClientRect();
    const aRect = activeEl.getBoundingClientRect();

    const topOverflow = aRect.top < cRect.top + pad;
    const bottomOverflow = aRect.bottom > cRect.bottom - pad;

    if (topOverflow) {
      container.scrollBy({ top: aRect.top - cRect.top - pad, behavior: 'smooth' });
      return;
    }

    if (bottomOverflow) {
      container.scrollBy({ top: aRect.bottom - cRect.bottom + pad, behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    updateScrollState();
  }, [items.length]);

  useEffect(() => {
    ensureActiveVisible();
    const raf = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => updateScrollState();
    const onResize = () => {
      updateScrollState();
      ensureActiveVisible();
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const raf = requestAnimationFrame(updateScrollState);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <aside className={styles.sidebar} data-ui-image-preview-sidebar>
      {isOverflow && canScrollUp && (
        <Button
          iconButton={<IconChevronArrowUpOutlined24 htmlColor="var(--steel-10)" />}
          className={clsx(styles.scrollBtn, styles.scrollUp)}
          onClick={() => scrollBy(-scrollStep)}
          aria-label="Прокрутить вверх"
          variant="secondary"
          color="ghost"
        />
      )}

      <div ref={carouselRef} className={styles.carousel} data-ui-image-preview-carousel>
        {items.map((it, idx) => (
          <button
            key={String(it.id ?? idx)}
            ref={idx === activeIndex ? activeBtnRef : null}
            type="button"
            className={clsx(styles.carouselItem, { [styles.active]: idx === activeIndex })}
            onClick={() => setActiveIndex(idx)}
            data-ui-image-preview-carousel-item
          >
            <img
              src={it.previewSrc}
              className={styles.carouselThumb}
              alt={it.alt ?? it.title ?? `Миниатюра ${idx + 1}`}
            />
          </button>
        ))}
      </div>

      {isOverflow && canScrollDown && (
        <Button
          iconButton={<IconChevronArrowDownOutlined24 htmlColor="var(--steel-10)" />}
          className={clsx(styles.scrollBtn, styles.scrollDown)}
          onClick={() => scrollBy(scrollStep)}
          aria-label="Прокрутить вниз"
          variant="secondary"
          color="ghost"
        />
      )}
    </aside>
  );
};

export default ImagePreviewSidebar;

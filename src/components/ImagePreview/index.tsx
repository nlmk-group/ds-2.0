import React, { FC, useEffect, useMemo, useState } from 'react';

import Icon from '@components/Icon';
import clsx from 'clsx';

import styles from './ImagePreview.module.scss';
import { IImagePreviewProps } from './types';
import { ImagePreviewModal } from '@components/ImagePreview/subcomponents';
import { clamp } from '@components/ImagePreview/utils';

const DEFAULT_PREVIEW_W = 140;

const ImagePreview: FC<IImagePreviewProps> = ({ items, className, previewImgWidth }) => {
  const safeItems = useMemo(() => (items ?? []).filter(Boolean), [items]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setActiveIndex(prev => clamp(prev, 0, Math.max(0, safeItems.length - 1)));
  }, [safeItems.length]);

  const openModal = (index: number) => {
    setActiveIndex(clamp(index, 0, Math.max(0, safeItems.length - 1)));
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  if (!safeItems.length) return null;

  const w = typeof previewImgWidth === 'number' ? previewImgWidth : DEFAULT_PREVIEW_W;

  return (
    <div className={clsx(styles.wrapper, className)} data-ui-image-preview>
      <div className={styles.list} style={{ ['--ip-thumb-w' as any]: `${w}px` }} data-ui-image-preview-grid>
        {safeItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <button
              key={String(item.id ?? idx)}
              type="button"
              className={styles.thumbButton}
              onClick={() => openModal(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-ui-image-preview-thumb
            >
              {item.previewSrc && (
                <img
                  src={item.previewSrc}
                  className={styles.thumb}
                  alt={item.alt ?? item.title ?? `Фото ${idx + 1}`}
                />
              )}

              {!item.previewSrc && (
                <div className={styles.emptyIcon}>
                  <Icon name="IconFactory32" htmlColor="var(--steel-50)" />
                </div>
              )}

              {isHovered && (
                <>
                  <div className={styles.hoverIcon}>
                    <Icon name="IconZoomInOutlined24" containerSize={32} data-ui-image-preview-hover-zoom-icon />
                  </div>
                  <div className={styles.hoverOverlay} data-ui-image-preview-hover-overlay />
                </>
              )}
            </button>
          );
        })}
      </div>

      {isModalOpen && safeItems[activeIndex] && (
        <ImagePreviewModal items={safeItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImagePreview;

import React, { useEffect, useMemo, useState } from 'react';

import Icon from '@components/Icon';
import clsx from 'clsx';

import styles from './ImagePreview.module.scss';
import { IImagePreviewProps } from './types';
import { ImagePreviewModal } from '@components/ImagePreview/subcomponents';
import { clamp } from '@components/ImagePreview/utils';
import { Box, Tooltip, Typography } from '@components/index';

const ImagePreview = ({ items, className, previewImgSize = 140 }: IImagePreviewProps) => {
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

  return (
    <div className={clsx(styles['wrapper'], className)} data-ui-image-preview>
      <Box
        data-ui-image-preview-grid
        flexWrap="wrap"
        gap={40}
        alignItems="flex-start"
      >
        {safeItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <Box key={String(item.id ?? idx)} flexDirection="column" gap={8} className={styles['item']}>
              <div
                style={{ width: previewImgSize, height: previewImgSize }}
                className={styles['thumb-button']}
                onClick={() => openModal(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-ui-image-preview-thumb
                data-testid="ui-image-preview-thumb"
              >
                {item.previewSrc && (
                  <img
                    src={item.previewSrc}
                    className={styles['thumb']}
                    alt={item.alt ?? item.title ?? `Фото ${idx + 1}`}
                  />
                )}

                {!item.previewSrc && (
                  <Box data-testid="empty-icon" justifyContent="center" alignItems="center" height="100%">
                    <Icon name="IconFactory32" htmlColor="var(--steel-50)" />
                  </Box>
                )}

                {isHovered && (
                  <>
                    <div className={styles['hover-icon']}>
                      <Icon name="IconZoomInOutlined24" containerSize={32} data-ui-image-preview-hover-zoom-icon />
                    </div>
                    <div className={styles['hover-overlay']} data-ui-image-preview-hover-overlay />
                  </>
                )}
              </div>

              {item.previewTitle && (
                <Box justifyContent="center" width={previewImgSize}>
                  <Tooltip title={item.previewTitle}  className={styles['preview-tooltip']} popupClassName={styles['preview-popup']}>
                    <Typography
                      className={styles['preview-title']}
                      color="var(--steel-90)"
                      variant="Body2-Medium"
                    >
                      {item.previewTitle}
                    </Typography>
                  </Tooltip>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {isModalOpen && safeItems[activeIndex] && (
        <ImagePreviewModal
          items={safeItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImagePreview;

import React, { useEffect, useMemo, useState } from 'react';

import { IImagePreviewProps } from './types';
import { ImageItem, ImagePreviewModal } from '@components/ImagePreview/subcomponents';
import { clamp } from '@components/ImagePreview/utils';
import { Box } from '@components/index';

const getItemKey = (item: { id?: string | number }, idx: number) => String(item.id ?? idx);

const ImagePreview = ({ items, className, previewImgSize = 140, checkedMap, handleCheckbox }: IImagePreviewProps) => {
  const safeItems = useMemo(() => (items ?? []).filter(Boolean), [items]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className={className} data-ui-image-preview>
      <Box data-ui-image-preview-grid flexWrap="wrap" gap={40} alignItems="flex-start">
        {safeItems.map((item, idx) => {
          const key = getItemKey(item, idx);
          const checked = !!checkedMap?.[key];

          return (
            <ImageItem
              key={key}
              image={item}
              imageIdx={idx}
              previewImgSize={previewImgSize}
              openModal={openModal}
              checked={checked}
              onCheckedChange={(nextChecked) => handleCheckbox?.({ item, checked: nextChecked })}
              showCheckbox={!!handleCheckbox}
            />
          );
        })}
      </Box>

      {isModalOpen && safeItems[activeIndex] && (
        <ImagePreviewModal items={safeItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImagePreview;

import React, { useEffect, useMemo, useState } from 'react';

import type { IImagePreviewProps } from './types';
import { ImageItem, ImagePreviewModal } from '@components/ImagePreview/subcomponents';
import { clamp, getItemKey, hasPreviewSrc } from '@components/ImagePreview/utils';
import { Box } from '@components/index';

const ImagePreview = ({
  items,
  className,
  previewImgSize = 140,
  checkedMap,
  handleCheckbox,
  onPreviewClick
}: IImagePreviewProps) => {
  const safeItems = useMemo(() => (items ?? []).filter(Boolean), [items]);

  const imageItems = useMemo(() => safeItems.filter(i => hasPreviewSrc(i.previewSrc)), [safeItems]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(prev => clamp(prev, 0, Math.max(0, imageItems.length - 1)));
  }, [imageItems.length]);

  const openModalByGlobalIndex = (globalIdx: number) => {
    const target = safeItems[globalIdx];
    if (!target) return;

    if (!hasPreviewSrc(target.previewSrc)) {
      onPreviewClick?.(target);
      return;
    }

    let imgIdx = 0;
    for (let i = 0; i < globalIdx; i += 1) {
      if (hasPreviewSrc(safeItems[i]?.previewSrc)) imgIdx += 1;
    }

    setActiveImageIndex(clamp(imgIdx, 0, Math.max(0, imageItems.length - 1)));
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  if (!safeItems.length) return null;

  return (
    <div className={className} data-ui-image-preview>
      <Box data-ui-image-preview-grid flexWrap="wrap" gap={40} alignItems="flex-start">
        {safeItems.map((rawItem, idx) => {
          const key = getItemKey(rawItem, idx);
          const checked = !!checkedMap?.[key];

          return (
            <ImageItem
              key={key}
              image={rawItem}
              imageIdx={idx}
              previewImgSize={previewImgSize}
              openModal={openModalByGlobalIndex}
              checked={checked}
              onCheckedChange={nextChecked => handleCheckbox?.({ item: rawItem, checked: nextChecked })}
              showCheckbox={!!handleCheckbox}
            />
          );
        })}
      </Box>

      {isModalOpen && imageItems.length > 0 && imageItems[activeImageIndex] && (
        <ImagePreviewModal
          items={imageItems}
          activeIndex={activeImageIndex}
          setActiveIndex={setActiveImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImagePreview;

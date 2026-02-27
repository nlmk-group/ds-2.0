import React, { useState } from 'react';
import clsx from 'clsx';

import { Box, Checkbox, IconFileNoType32, Tooltip, Typography } from '@components/index';
import styles from './ImageItem.module.scss';
import Icon from '@components/Icon';
import type { IImageItem } from '@components/ImagePreview/types';
import { useTruncate } from './hooks';
import { hasPreviewSrc } from '@components/ImagePreview/utils';

interface ImageItemProps {
  image: IImageItem;
  imageIdx: number;
  previewImgSize: number;
  openModal: (index: number) => void;

  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  showCheckbox?: boolean;
}

const ImageItem = ({
  image,
  imageIdx,
  openModal,
  previewImgSize,
  checked = false,
  onCheckedChange,
  showCheckbox = false
}: ImageItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { previewSrc, alt, title, previewTitle, PlaceholderSvgIcon } = image;
  const hasPreview = hasPreviewSrc(previewSrc);

  const { isTruncated, titleWrapRef, measureRef } = useTruncate(previewImgSize, previewTitle);

  const fallbackAlt = alt ?? title ?? `Фото ${imageIdx + 1}`;

  const renderPlaceholder = () => {
    if (React.isValidElement(PlaceholderSvgIcon)) return PlaceholderSvgIcon;

    return <IconFileNoType32 htmlColor="var(--mnemo-60)" />;
  };

  const renderThumbContent = () => {
    if (!hasPreview) {
      return (
        <Box className={styles.file} data-testid="placeholder-icon" justifyContent="center" alignItems="center" height="100%">
          {renderPlaceholder()}
        </Box>
      );
    }

    return <img src={String(previewSrc)} className={styles.thumb} alt={fallbackAlt} />;
  };

  return (
    <Box
      flexDirection="column"
      gap={8}
      className={styles.item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {((showCheckbox && isHovered) || checked) && (
        <Checkbox className={styles.checkbox} checked={checked} onChange={() => onCheckedChange?.(!checked)} />
      )}

      <div
        style={{ width: previewImgSize, height: previewImgSize }}
        className={clsx(styles['thumb-button'], !hasPreview && styles['thumb-button--placeholder'])}
        onClick={() => openModal(imageIdx)}
        data-ui-image-preview-thumb
        data-testid="ui-image-preview-thumb"
      >
        {renderThumbContent()}

        {isHovered && hasPreview && (
          <>
            <div className={styles['hover-icon']}>
              <Icon name="IconZoomInOutlined24" containerSize={32} data-ui-image-preview-hover-zoom-icon />
            </div>
            <div className={styles['hover-overlay']} data-ui-image-preview-hover-overlay />
          </>
        )}
      </div>

      {previewTitle && (
        <Box justifyContent="center" width={previewImgSize}>
          <Tooltip
            title={isTruncated ? previewTitle : undefined}
            className={styles['preview-tooltip']}
            popupClassName={styles['preview-popup']}
          >
            <span ref={titleWrapRef} className={styles['preview-title-wrap']}>
              <Typography className={styles['preview-title']} color="var(--steel-90)" variant="Body2-Medium">
                {previewTitle}
              </Typography>
            </span>
          </Tooltip>

          <span ref={measureRef} className={styles['preview-measure']} aria-hidden>
            <Typography className={styles['preview-title']} color="var(--steel-90)" variant="Body2-Medium">
              {previewTitle}
            </Typography>
          </span>
        </Box>
      )}
    </Box>
  );
};

export default ImageItem;

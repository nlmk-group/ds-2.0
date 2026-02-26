import React, { useState } from 'react';

import { Box, Checkbox, Tooltip, Typography } from '@components/index';
import styles from './ImageItem.module.scss';
import Icon from '@components/Icon';
import { IImageItem } from '@components/ImagePreview/types';
import { useTruncate } from './hooks';

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

  const { previewSrc, alt, title, previewTitle } = image;

  const { isTruncated, titleWrapRef, measureRef } = useTruncate(previewImgSize, previewTitle);

  return (
    <Box flexDirection="column" gap={8} className={styles.item}>
      {showCheckbox && (
        <Checkbox
          className={styles.checkbox}
          checked={checked}
          onChange={() => onCheckedChange?.(!checked)}
        />
      )}

      <div
        style={{ width: previewImgSize, height: previewImgSize }}
        className={styles['thumb-button']}
        onClick={() => openModal(imageIdx)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-ui-image-preview-thumb
        data-testid="ui-image-preview-thumb"
      >
        {previewSrc ? (
          <img src={previewSrc} className={styles.thumb} alt={alt ?? title ?? `Фото ${imageIdx + 1}`} />
        ) : (
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

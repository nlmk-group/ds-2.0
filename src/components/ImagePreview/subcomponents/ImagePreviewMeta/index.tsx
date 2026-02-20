import React, { FC } from 'react';
import clsx from 'clsx';

import { Typography } from '@components/index';

import styles from './ImagePreviewMeta.module.scss';

interface ImagePreviewMetaProps {
  isMobile: boolean;
  title?: string;
  description?: string;
  metaTopRef?: React.RefObject<HTMLDivElement | null>;
  isMetaExpanded?: boolean;
  showMetaToggle?: boolean;
  onToggleMeta?: () => void;
};

const ImagePreviewMeta: FC<ImagePreviewMetaProps> = ({
  isMobile,
  title,
  description,
  metaTopRef,
  isMetaExpanded = false,
  showMetaToggle = false,
  onToggleMeta
}) => {
  if (isMobile) {
    return (
      <div
        ref={metaTopRef}
        className={clsx(styles.metaTop, { [styles.metaTopExpanded]: isMetaExpanded })}
        data-ui-image-preview-meta-top
      >
        <Typography
          className={clsx(styles.metaLine, isMetaExpanded ? styles.metaUnclamped : styles.metaClamp2)}
          variant="Body2"
          color="var(--unique-white)"
        >
          {title ?? ''}
        </Typography>

        <Typography
          className={clsx(styles.metaLine, isMetaExpanded ? styles.metaUnclamped : styles.metaClamp3)}
          variant="Body2"
          color="var(--unique-white)"
        >
          {description ?? ''}
        </Typography>

        {showMetaToggle && (
          <button
            type="button"
            className={styles.metaToggle}
            onClick={onToggleMeta}
            aria-expanded={isMetaExpanded}
          >
            {isMetaExpanded ? 'Свернуть' : 'Показать полностью'}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.meta} data-ui-image-preview-meta>
      <Typography className={styles.metaLine} variant="Body2" color="var(--unique-white)">
        {title ?? ''}
      </Typography>
      <Typography className={styles.metaLine} variant="Body2" color="var(--unique-white)">
        {description ?? ''}
      </Typography>
    </div>
  );
};

export default ImagePreviewMeta;

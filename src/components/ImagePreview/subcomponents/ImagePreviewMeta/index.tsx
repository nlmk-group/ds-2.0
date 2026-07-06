import React from 'react';

import { Box, Button, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './ImagePreviewMeta.module.scss';

interface ImagePreviewMetaProps {
  isMobile: boolean;
  title?: string;
  description?: string;
  metaTopRef?: React.RefObject<HTMLDivElement | null>;
  isMetaExpanded?: boolean;
  showMetaToggle?: boolean;
  onToggleMeta?: () => void;
}

const ImagePreviewMeta = ({
  isMobile,
  title,
  description,
  metaTopRef,
  isMetaExpanded = false,
  showMetaToggle = false,
  onToggleMeta
}: ImagePreviewMetaProps) => {
  if (isMobile) {
    return (
      <Box
        flexDirection="column"
        alignItems="center"
        gap={6}
        ref={metaTopRef}
        className={clsx(styles['meta-top'], { [styles['meta-top-expanded']]: isMetaExpanded })}
        data-ui-image-preview-meta-top
      >
        <Typography
          className={clsx(styles['meta-line'], isMetaExpanded ? styles['meta-unclamped'] : styles['meta-clamp-2'])}
          variant="Body2"
          color="var(--unique-white)"
        >
          {title ?? ''}
        </Typography>

        <Typography
          className={clsx(styles['meta-line'], isMetaExpanded ? styles['meta-unclamped'] : styles['meta-clamp-3'])}
          variant="Body2"
          color="var(--unique-white)"
        >
          {description ?? ''}
        </Typography>

        {showMetaToggle && (
          <Button
            variant="secondary"
            size="xs"
            className={styles['meta-toggle']}
            onClick={onToggleMeta}
            aria-expanded={isMetaExpanded}
          >
            {isMetaExpanded ? 'Свернуть' : 'Показать полностью'}
          </Button>
        )}
      </Box>
    );
  }

  return (
    <Box
      className={styles['meta']}
      data-ui-image-preview-meta
      flexDirection="column"
      alignItems="stretch"
      gap={8}
      p={8}
    >
      <Typography className={styles['meta-line']} variant="Body2" color="var(--unique-white)">
        {title ?? ''}
      </Typography>
      <Typography className={styles['meta-line']} variant="Body2" color="var(--unique-white)">
        {description ?? ''}
      </Typography>
    </Box>
  );
};

export default ImagePreviewMeta;

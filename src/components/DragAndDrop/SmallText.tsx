import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { Button, IconCloseOutlined24, Typography } from '@components/index';

import { ISmallText } from './types';

import styles from './DragAndDrop.module.scss';

import UploadIcon from './UploadIcon';

const SmallText: FC<ISmallText> = ({
  title,
  loading,
  percentUpload,
  statusColor,
  disabled,
  cancelUpload = null
}) => {
  return (
    <div data-testid={`SMALL_TEXT_${statusColor}`}>
      {loading ? (
        <div style={{ display: 'flex', gap: '8px' }}>
          <UploadIcon smallText showSpinner={false} size={sizesMapping.l} percentUpload={percentUpload} />
          <Typography className={styles['small-title-helper']} variant="Heading3">
            {title}
          </Typography>
          {cancelUpload !== null && (
            <div style={{ pointerEvents: disabled ? 'none' : 'all' }}>
              <Button
                variant='primary'
                fill='clear'
                size='s'
                iconButton={<IconCloseOutlined24 />}
                onClick={cancelUpload}
              />
            </div>
          )}
        </div>
      ) : (
        <Typography variant="Heading3" className={styles[`small-title-${statusColor}`]}>
          {title}
        </Typography>
      )}
    </div>
  );
};

export default SmallText;

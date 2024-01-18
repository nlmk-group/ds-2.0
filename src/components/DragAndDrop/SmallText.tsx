import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { Typography } from '@components/index';

import { ISmallText } from './types';

import styles from './DragAndDrop.module.scss';

import UploadIcon from './UploadIcon';

const SmallText: FC<ISmallText> = ({ title, loading, percentUpload, statusColor }) => {
  return (
    <div data-testid={`SMALL_TEXT_${statusColor}`}>
      {loading ? (
        <div style={{ display: 'flex', gap: '8px' }}>
          <UploadIcon smallText showSpinner={false} size={sizesMapping.l} percentUpload={percentUpload} />
          <Typography className={styles['small-title-helper']} variant="Heading3">
            {title}
          </Typography>
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

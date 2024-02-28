import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { ISmallIcon } from './types';

import styles from './DragAndDrop.module.scss';

import { statusColorMapping } from './enums';
import UploadIcon from './UploadIcon';
import { IconAddPlusCircleOutlined24, IconAttentionWarningAlertErrorOutlined24 } from '..';

const SmallIcon: FC<ISmallIcon> = ({ loading, percentUpload, statusColor, customIcon }) => {
  const iconHelper = () => {
    switch(statusColor) {
      case statusColorMapping.error:
        return <IconAttentionWarningAlertErrorOutlined24 />
      case statusColorMapping.info:
        return <IconAddPlusCircleOutlined24 />;
      case statusColorMapping.warning:
        return <IconAttentionWarningAlertErrorOutlined24 />;
      default:
        return <IconAddPlusCircleOutlined24 />;
    }
  }
  return (
    <div
      className={clsx(
        styles['icon-s'],
        styles['small-icon-margin']
      )}
      style={{ height: 'var(--24-size)' }}
    >
      {loading ? (
        <UploadIcon smallIcon showSpinner={false} size={sizesMapping.m} percentUpload={percentUpload} />
      ) : (
        customIcon || iconHelper()
      )}
    </div>
  );
};

export default SmallIcon;

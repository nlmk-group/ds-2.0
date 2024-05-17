import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { ISmallIcon } from './types';

import styles from './DragAndDrop.module.scss';

import {
  Button,
  IconAddPlusOutlined24,
  IconAttentionWarningAlertErrorOutlined24,
  IconAttentionWarningAlertOutlined24
} from '..';
import { statusColorMapping } from './enums';
import UploadIcon from './UploadIcon';

const SmallIcon: FC<ISmallIcon> = ({ loading, percentUpload, statusColor, customIcon }) => {
  const iconHelper = () => {
    switch (statusColor) {
      case statusColorMapping.error:
        return <Button variant="grey" fill="clear" iconButton={<IconAttentionWarningAlertErrorOutlined24 />} />;
      case statusColorMapping.info:
        return <Button variant="primary" fill="clear" iconButton={<IconAddPlusOutlined24 />} />;
      case statusColorMapping.warning:
        return (
          <Button
            variant="grey"
            fill="clear"
            className={styles['small-warning-icon']}
            iconButton={<IconAttentionWarningAlertOutlined24 />}
          />
        );
      default:
        return <Button variant="grey" fill="clear" iconButton={<IconAddPlusOutlined24 />} />;
    }
  };

  return (
    <div
      className={clsx(styles['icon-s'], styles['small-icon-margin'])}
      style={{ height: 'var(--24-size)', display: 'flex', alignItems: 'center' }}
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

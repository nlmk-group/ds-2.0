import React, { FC } from 'react';

import { Button, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import { IDefaultDnD } from './types';

import styles from './DragAndDrop.module.scss';

import { descriptionSizeHelperMapping, iconTypeMapping, titleSizeHelperMapping } from './enums';
import UploadIcon from './UploadIcon';

const DefaultDragAndDrop: FC<IDefaultDnD> = ({
  disabled,
  loading,
  size,
  percentUpload,
  withIcon,
  customIcon,
  fileType,
  title,
  statusColor,
  description,
  btnLabel,
  onButtonClick
}) => {
  return (
    <div>
      {loading && <UploadIcon size={size} percentUpload={percentUpload} />}
      {!loading && withIcon && (
        <div
          data-testid={`ICON_TYPE_${iconTypeMapping[fileType]}`}
          className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
        >
          {customIcon || <Icon name={iconTypeMapping[fileType]} />}
        </div>
      )}

      <div className={styles['text-wrapper']}>
        {JSON.stringify(title).length > 0 && (
          <Typography variant={titleSizeHelperMapping[size]} className={styles[`title-${statusColor}`]}>
            {title}
          </Typography>
        )}
        {JSON.stringify(description).length > 0 && (
          <Typography variant={descriptionSizeHelperMapping[size]} className={styles['text-color']}>
            {description}
          </Typography>
        )}
        {btnLabel.length > 0 && (
          <div className={styles['btn-wrapper']} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
            <Button variant="text" onClick={onButtonClick}>
              <div className={styles[`btn-text-${statusColor}`]}>{btnLabel}</div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultDragAndDrop;

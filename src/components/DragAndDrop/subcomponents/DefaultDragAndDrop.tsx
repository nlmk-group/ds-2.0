import React, { FC } from 'react';
import * as ReactIs from 'react-is';

import { Button, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import styles from '../DragAndDrop.module.scss';

import { EDnDDescriptionSizeHelper, EDnDIconType, EDnDSizes, EDnDTitleSizeHelper } from '../enums';
import { IDefaultDnDProps } from '../types';
import UploadIcon from './UploadIcon';

const getButtonVariant = (loading: boolean) => {
  if (loading) {
    return 'secondary';
  }
  return 'primary';
};

const DefaultDragAndDrop: FC<IDefaultDnDProps> = ({
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
          data-testid={`ICON_TYPE_${EDnDIconType[fileType]}`}
          className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
        >
          {customIcon || <Icon name={EDnDIconType[fileType]} data-ui-dnd-icon />}
        </div>
      )}

      <div className={styles['text-wrapper']}>
        {ReactIs.typeOf(title) === ReactIs.Element ? (
          <>{title}</>
        ) : (
          <Typography
            variant={EDnDTitleSizeHelper[size]}
            className={clsx(styles[`title-${statusColor}`], loading && styles['title-loading'])}
            data-ui-dnd-title
          >
            {title}
          </Typography>
        )}
        {ReactIs.typeOf(description) === ReactIs.Element ? (
          <>{description}</>
        ) : (
          <Typography
            variant={EDnDDescriptionSizeHelper[size]}
            className={clsx(styles[`text-color`], loading && styles['text-loading'])}
            data-ui-dnd-description
          >
            {description}
          </Typography>
        )}
        {btnLabel.length > 0 && size === EDnDSizes.l && (
          <div className={styles['btn-wrapper']} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
            <Button size="m" variant={getButtonVariant(loading)} onClick={onButtonClick} data-ui-dnd-button>
              {btnLabel}
            </Button>
          </div>
        )}
        {btnLabel.length > 0 && size === EDnDSizes.m && (
          <div className={styles['btn-wrapper-medium']} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
            <Button size="s" variant={getButtonVariant(loading)} onClick={onButtonClick} data-ui-dnd-button>
              {btnLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultDragAndDrop;

import React, { FC } from 'react';
import * as ReactIs from 'react-is';

import { sizesMapping } from '@components/declaration';
import { Button, Icon, Typography } from '@components/index';
import { clsx } from 'clsx';

import styles from '../DragAndDrop.module.scss';

import { EDnDDescriptionSizeHelper, EDnDIconType, EDnDStatusColor, EDnDTitleSizeHelper } from '../enums';
import { IDefaultDnDProps } from '../types';
import UploadIcon from './UploadIcon';

const getButtonFill = (loading: boolean, statusColor: `${EDnDStatusColor}`) => {
  if (loading) {
    return 'solid';
  }
  switch (statusColor) {
    case EDnDStatusColor.error:
      return 'error';
    case EDnDStatusColor.warning:
      return 'warning';
    default:
      return 'solid';
  }
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
      {loading && size === sizesMapping.m && <UploadIcon size={size} />}
      {!loading && withIcon && (
        <div
          data-testid={`ICON_TYPE_${EDnDIconType[fileType]}`}
          className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}
        >
          {customIcon || <Icon name={EDnDIconType[fileType]} />}
        </div>
      )}

      <div className={styles['text-wrapper']}>
        {ReactIs.typeOf(title) === ReactIs.Element ? (
          <>{title}</>
        ) : (
          <Typography
            variant={EDnDTitleSizeHelper[size]}
            className={clsx(styles[`title-${statusColor}`], loading && styles['title-loading'])}
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
          >
            {description}
          </Typography>
        )}
        {btnLabel.length > 0 && size === sizesMapping.l && (
          <div className={styles['btn-wrapper']} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
            <Button size="m" variant="secondary" fill={getButtonFill(loading, statusColor)} onClick={onButtonClick}>
              {btnLabel}
            </Button>
          </div>
        )}
        {btnLabel.length > 0 && size === sizesMapping.m && (
          <div className={styles['btn-wrapper-medium']} style={{ pointerEvents: disabled ? 'none' : 'all' }}>
            <Button size="s" variant="secondary" fill={getButtonFill(loading, statusColor)} onClick={onButtonClick}>
              {btnLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultDragAndDrop;

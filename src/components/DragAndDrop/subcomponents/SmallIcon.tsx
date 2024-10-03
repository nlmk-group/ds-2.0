import React, { FC } from 'react';

import Button from '@components/Button';
import { sizesMapping } from '@components/declaration';
import {
  IconAddPlusOutlined24,
  IconAttentionWarningAlertErrorOutlined24,
  IconAttentionWarningAlertOutlined24
} from '@components/Icon/IconsDirectory';
import { clsx } from 'clsx';

import styles from '../DragAndDrop.module.scss';

import { EDnDStatusColor } from '../enums';
import UploadIcon from '../subcomponents/UploadIcon';
import { ISmallIconProps } from '../types';

/**
 * Компонент SmallIcon отображает маленькую иконку для области перетаскивания и загрузки файлов.
 *
 * @param {object} props - Свойства компонента SmallIcon.
 * @param {boolean} props.loading - Показать индикатор загрузки.
 * @param {number} props.percentUpload - Процент выполнения загрузки.
 * @param {`${EDnDStatusColor}`} props.statusColor - Цвет статуса.
 * @param {JSX.Element} [props.customIcon] - Пользовательская иконка.
 * @returns {JSX.Element} - Компонент SmallIcon.
 */

const SmallIcon: FC<ISmallIconProps> = ({ loading, percentUpload, statusColor, customIcon }) => {
  const iconHelper = () => {
    switch (statusColor) {
      case EDnDStatusColor.error:
        return (
          <Button variant="info" size="m" fill="error" iconButton={<IconAttentionWarningAlertErrorOutlined24 />} />
        );
      case EDnDStatusColor.info:
        return <Button variant="primary" size="m" fill="clear" iconButton={<IconAddPlusOutlined24 />} />;
      case EDnDStatusColor.warning:
        return (
          <Button
            variant="info"
            size="m"
            fill="warning"
            className={styles['small-warning-icon']}
            iconButton={<IconAttentionWarningAlertOutlined24 />}
          />
        );
      default:
        return (
          <Button
            className={styles['small-default-icon']}
            variant="primary"
            size="m"
            fill="clear"
            iconButton={<IconAddPlusOutlined24 />}
          />
        );
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

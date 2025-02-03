import React, { FC } from 'react';

import Button from '@components/Button';
import { IconAddPlusOutlined24, IconAttentionWarningAlertErrorOutlined24 } from '@components/Icon/IconsDirectory';
import { clsx } from 'clsx';

import styles from '../DragAndDrop.module.scss';

import { EDnDSizes, EDnDStatusColor } from '../enums';
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
          <Button
            variant="primary"
            size="m"
            color="error"
            iconButton={<IconAttentionWarningAlertErrorOutlined24 />}
            data-ui-dnd-small-icon
          />
        );
      case EDnDStatusColor.info:
        return (
          <Button
            size="m"
            color="ghost"
            variant="secondary"
            iconButton={<IconAddPlusOutlined24 />}
            data-ui-dnd-small-icon
          />
        );
      default:
        return (
          <Button
            className={styles['small-default-icon']}
            size="m"
            color="ghost"
            variant="secondary"
            iconButton={<IconAddPlusOutlined24 />}
            data-ui-dnd-small-icon
          />
        );
    }
  };

  return (
    <div
      className={clsx(styles['icon-s'], styles['small-icon-margin'])}
      style={{ height: '24px', display: 'flex', alignItems: 'center' }}
    >
      {loading ? (
        <UploadIcon smallIcon showSpinner={false} size={EDnDSizes.m} percentUpload={percentUpload} />
      ) : (
        customIcon || iconHelper()
      )}
    </div>
  );
};

export default SmallIcon;

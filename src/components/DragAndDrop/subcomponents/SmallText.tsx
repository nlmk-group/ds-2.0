import React, { FC } from 'react';

import { sizesMapping } from '@components/declaration';
import { Button, IconCloseOutlined24, Typography } from '@components/index';

import styles from '../DragAndDrop.module.scss';

import { ISmallTextProps } from '../types';
import UploadIcon from './UploadIcon';

/**
 * Компонент SmallText отображает маленький текст для области перетаскивания и загрузки файлов.
 *
 * @param {object} props - Свойства компонента SmallText.
 * @param {string | React.ReactNode} props.title - Заголовок компонента.
 * @param {boolean} props.loading - Показать индикатор загрузки.
 * @param {number} props.percentUpload - Процент выполнения загрузки.
 * @param {`${EStatusColorDnD}`} props.statusColor - Цвет статуса.
 * @param {boolean} props.disabled - Отключен ли компонент.
 * @param {() => void} [props.cancelUpload] - Функция для отмены загрузки.
 * @returns {JSX.Element} - Компонент SmallText.
 */
const SmallText: FC<ISmallTextProps> = ({ title, loading, percentUpload, statusColor, disabled, cancelUpload }) => {
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
                variant="primary"
                className={styles['small-text-button']}
                fill="clear"
                size="s"
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

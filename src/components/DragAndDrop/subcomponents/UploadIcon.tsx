import React, { FC } from 'react';

import { Spinner, Typography } from '@components/index';
import clsx from 'clsx';

import styles from '../DragAndDrop.module.scss';

import { EDnDPercentageSizeHelper, EDnDSpinnerSizeHelper, EDnDSpinnerWidthHelper } from '../enums';
import { IUploadHelperProps } from '../types';

/**
 * Компонент UploadIcon отображает иконку загрузки с прогрессом.
 *
 * @param {object} props - Свойства компонента UploadIcon.
 * @param {boolean} [props.smallText=false] - Использовать маленький текст.
 * @param {boolean} [props.smallIcon=false] - Использовать маленькую иконку.
 * @param {boolean} [props.showSpinner=true] - Показать индикатор загрузки.
 * @param {sizesDnD} props.size - Размер иконки загрузки.
 * @param {number} [props.percentUpload] - Процент выполнения загрузки.
 * @returns {JSX.Element} - Компонент UploadIcon.
 */
const UploadIcon: FC<IUploadHelperProps> = ({
  smallText = false,
  smallIcon = false,
  showSpinner = true,
  size,
  percentUpload
}) => {
  const handleBoxSize = (): string[] => {
    let height: string = EDnDSpinnerWidthHelper[size];
    let width: string = EDnDSpinnerWidthHelper[size];

    if (smallText) {
      height = 'unset';
      width = '51px';
    }

    if (smallIcon) {
      height = 'var(--40-size)';
      width = '42px';
    }

    return [height, width];
  };

  const wrapperSize = handleBoxSize();

  return (
    <div
      className={clsx(
        !smallText && !smallIcon && styles['loader-wrapper'],
        smallText && styles['loader-wrapper-small-text']
      )}
      style={{
        height: wrapperSize[0],
        width: wrapperSize[1]
      }}
    >
      {showSpinner && (
        <div className={styles['spinner-position-helper']}>
          <Spinner size={EDnDSpinnerSizeHelper[size]} />
        </div>
      )}
      {typeof percentUpload === 'number' && percentUpload > 0 && (
        <div
          className={clsx({
            [styles['percent-wrapper-l']]: !(smallIcon || smallText),
            [styles['percent-wrapper']]: smallIcon || smallText
          })}
          data-testid="PERCENT"
        >
          <Typography variant={smallIcon ? 'Heading4' : EDnDPercentageSizeHelper[size]}>
            {Math.min(Math.floor(percentUpload), 100)}%
          </Typography>
        </div>
      )}
    </div>
  );
};

export default UploadIcon;

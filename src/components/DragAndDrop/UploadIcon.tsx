import React, { FC } from 'react';

import { Spinner, Typography } from '@components/index';

import { IUploadHelper } from './types';

import styles from './DragAndDrop.module.scss';

import { percentageSizeHelperMapping, spinnerSizeHelperMapping, spinnerWidthHelperMapping } from './enums';

const UploadIcon: FC<IUploadHelper> = ({
  smallText = false,
  smallIcon = false,
  showSpinner = true,
  size,
  percentUpload
}) => {
  const handleBoxSize = (): string[] => {
    let height: string = spinnerWidthHelperMapping[size];
    let width: string = spinnerWidthHelperMapping[size];

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
      className={styles['loader-wrapper']}
      style={{
        height: wrapperSize[0],
        width: wrapperSize[1]
      }}
    >
      {showSpinner && (
        <div className={styles['spinner-position-helper']}>
          <Spinner size={spinnerSizeHelperMapping[size]} />
        </div>
      )}
      {percentUpload > 0 && (
        <div className={styles['percent-wrapper']} data-testid="PERCENT">
          <Typography variant={smallIcon ? 'Heading4' : percentageSizeHelperMapping[size]}>{percentUpload}%</Typography>
        </div>
      )}
    </div>
  );
};

export default UploadIcon;

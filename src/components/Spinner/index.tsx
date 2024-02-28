import React, { FC } from 'react';

import { ISpinner, sizes } from './types';

import styles from './Spinner.module.scss';
import { Typography } from '@components/index'

const spinnerSizes: { [key: string]: number } = { xxl: 96, xl: 56, l: 40, m: 32 };
const defaultSize = spinnerSizes[sizes.LARGE];

const Spinner: FC<ISpinner> = ({
  size = defaultSize,
  bgColor,
  color,
  percent = null,
  children
}) => {
  const spinnerSize = spinnerSizes[size] ?? defaultSize;
  const isIcon = children?.type.name.includes('Icon');
  const typographyOptionHelper = () => {
    switch(size) {
      case sizes.EXTRA_EXTRA_LARGE:
        return 'Heading3';
      case sizes.EXTRA_LARGE:
        return 'Body1-Bold';
      case sizes.LARGE:
        return 'Caption-Bold';
      case sizes.MEDIUM:
        return 'Caption-Bold';
      default:
        return 'Caption-Bold';
    }
  }
  return (
    <div className={styles['spinner-wrapper']}>
      {percent !== null && (
        <div
          className={styles['percent-wrapper']}
          style={{ color }}
        >
          <Typography variant={typographyOptionHelper()}>
            {percent < 100 ? percent : 99}%
          </Typography>
        </div>
      )}
      {!children || !isIcon ? (
        <>
          <span
            className={styles.bg}
            style={{
              width: spinnerSize,
              height: spinnerSize,
              color: bgColor
            }}
            role="progressbar"
          >
            <svg viewBox="22 22 44 44">
              <circle cx="44" cy="44" r="20" fill="none" strokeWidth="4"></circle>
            </svg>
          </span>
          <span className={styles.loader} style={{ width: spinnerSize, height: spinnerSize, color }} role="progressbar">
            <svg viewBox="22 22 44 44">
              <circle cx="44" cy="44" r="20" fill="none" strokeWidth="4"></circle>
            </svg>
          </span>
        </>
      ) : (
        <div className={styles.icon}>{children}</div>
      )}
    </div>
  );
};

export default Spinner;

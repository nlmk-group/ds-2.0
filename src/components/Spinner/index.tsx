import React, { FC } from 'react';

import { ISpinner, sizes } from './types';

import styles from './Spinner.module.scss';

const spinnerSizes: { [key: string]: number } = { xxl: 96, xl: 56, l: 40, m: 32 };
const defaultSize = spinnerSizes[sizes.LARGE];

const Spinner: FC<ISpinner> = ({ size = defaultSize, bgColor, color, children }) => {
  const spinnerSize = spinnerSizes[size] ?? defaultSize;
  const isIcon = children?.type.name === 'Icon';

  return (
    <div className={styles['spinner-wrapper']}>
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

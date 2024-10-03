import React, { FC } from 'react';

import { clsx } from 'clsx';

import styles from '../Divider.module.scss';

import { IVerticalBorder } from '../types';

const VerticalBorder: FC<IVerticalBorder> = ({ className, dashed = false }) => {
  return (
    <div data-testid="VERTICAL_DIVIDER" className={clsx(className, styles['vertical-wrapper'])}>
      <div
        data-testid="VERTICAL_DIVIDER_BORDER"
        className={clsx(
          styles['border-vertical'],
          dashed ? styles['border-vertical-dashed'] : styles['border-vertical-solid']
        )}
      />
    </div>
  );
};

export default VerticalBorder;

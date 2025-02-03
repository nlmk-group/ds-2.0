import React, { FC } from 'react';

import { clsx } from 'clsx';

import styles from '../Divider.module.scss';

import { IVerticalBorder } from '../types';

const VerticalBorder: FC<IVerticalBorder> = ({ className, dashed = false }) => {
  return (
    <div
      className={clsx(className, styles['vertical-wrapper'])}
      data-ui-vertical-divider
      data-testid="VERTICAL_DIVIDER"
    >
      <div
        className={clsx(
          styles['border-vertical'],
          dashed ? styles['border-vertical-dashed'] : styles['border-vertical-solid']
        )}
        data-ui-vertical-divider-border
        data-testid="VERTICAL_DIVIDER_BORDER"
      />
    </div>
  );
};

export default VerticalBorder;

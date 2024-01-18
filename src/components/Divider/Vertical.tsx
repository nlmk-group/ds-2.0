import React, { FC } from 'react';

import { clsx } from 'clsx';

import { IVertical } from './types';

import styles from './Divider.module.scss';

const Vertical: FC<IVertical> = ({ className, dashed = false }) => {
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

export default Vertical;

import React, { FC } from 'react';

import { clsx } from 'clsx';

import { IHorizontalBorder } from './types';

import styles from './Divider.module.scss';

const HorizontalBorder: FC<IHorizontalBorder> = ({ isSmall, dashed = false, orientationSpace = 0 }): JSX.Element => (
  <div
    data-testid="BORDER_WRAPPER"
    style={isSmall && orientationSpace !== 0 ? { width: `${orientationSpace}px` } : {}}
    className={clsx(styles['border-horizontal-wrapper'], isSmall && styles['border-horizontal-small'])}
  >
    <div
      data-testid="BORDER"
      className={clsx(styles['border-horizontal'], dashed ? styles['border-dashed'] : styles['border-solid'])}
    />
  </div>
);

export default HorizontalBorder;

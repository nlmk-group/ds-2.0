import React, { FC } from 'react';

import { clsx } from 'clsx';

import styles from '../Divider.module.scss';

import { IHorizontalBorder } from '../types';

const HorizontalBorder: FC<IHorizontalBorder> = ({ isSmall, dashed = false, orientationSpace = 0 }): JSX.Element => (
  <div
    style={isSmall && orientationSpace !== 0 ? { width: `${orientationSpace}px` } : {}}
    className={clsx(styles['border-horizontal-wrapper'], isSmall && styles['border-horizontal-small'])}
    data-ui-horizontal-divider
    data-testid="BORDER_WRAPPER"
  >
    <div
      className={clsx(styles['border-horizontal'], dashed ? styles['border-dashed'] : styles['border-solid'])}
      data-ui-horizontal-divider-border
      data-testid="BORDER"
    />
  </div>
);

export default HorizontalBorder;

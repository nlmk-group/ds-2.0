import React, { FC } from 'react';

import { clsx } from 'clsx';

import styles from '../Divider.module.scss';

import { IVerticalBorder } from '../types';

const VerticalBorder: FC<IVerticalBorder> = ({ className, dashed = false }) => (
  <div
    className={clsx(
      className,
      styles['border-vertical'],
      styles[dashed ? 'border-vertical-dashed' : 'border-vertical-solid']
    )}
    role="separator"
    aria-orientation="vertical"
    data-ui-vertical-divider
    data-testid="VERTICAL_DIVIDER"
  />
);

export default VerticalBorder;

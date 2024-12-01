import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartBubble32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.6 14.933a4.262 4.262 0 0 1 4.266 4.267A4.262 4.262 0 0 1 9.6 23.467 4.262 4.262 0 0 1 5.333 19.2 4.262 4.262 0 0 1 9.6 14.933Zm10.133 6.4a2.667 2.667 0 1 1 0 5.333 2.667 2.667 0 0 1 0-5.333Zm.533-16a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartBubble32;

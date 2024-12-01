import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartTree32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.6 8.2H29V29H18.6V8.2ZM3 5.6h26V3H3v2.6Zm0 5.2h13V8.2H3v2.6ZM12.1 29H16V13.4h-3.9V29ZM3 29h6.5V13.4H3V29Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartTree32;

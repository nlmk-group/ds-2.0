import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartWaterfall24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 2h2v18h18v2H2V2Zm15 0h3v16h-3V2ZM6 11h3v7H6v-7Zm7-8h3v4h-3V3Zm-3 5h3v4h-3V8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartWaterfall24;

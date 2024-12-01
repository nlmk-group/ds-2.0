import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartWaterfall32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3 3h2.6v23.4H29V29H3V3Zm19.5 0h3.9v20.8h-3.9V3ZM8.2 14.7h3.9v9.1H8.2v-9.1Zm9.1-10.4h3.9v5.2h-3.9V4.3Zm-3.9 6.5h3.9V16h-3.9v-5.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartWaterfall32;

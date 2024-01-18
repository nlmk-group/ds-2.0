import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTrendIndicatorUp24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.9863 16.8713C3.74075 17.0622 3.39092 17.0383 3.17369 16.8156C2.95646 16.593 2.94116 16.2427 3.13814 16.0019L8.63814 9.27968C8.84203 9.03048 9.20431 8.98223 9.46632 9.16938L13.2971 11.9056L16.3047 8.52211L14.7843 7.00214C14.4146 6.63261 14.676 6 15.1982 6H21.3585C21.6821 6 21.9444 6.26273 21.9444 6.58682V12.7453C21.9444 13.2679 21.3138 13.5298 20.9446 13.1607L19.3713 11.5879L13.7801 16.2472C13.551 16.4381 13.2176 16.4358 12.9912 16.2418L9.09234 12.8999L3.9863 16.8713Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTrendIndicatorUp24;

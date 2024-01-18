import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconJsonOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5 1.75C3.48122 1.75 2.25 2.98122 2.25 4.5V6C2.25 6.69036 1.69036 7.25 1 7.25V8.75C1.69036 8.75 2.25 9.30964 2.25 10V11.5C2.25 13.0188 3.48122 14.25 5 14.25H6V12.75H5C4.30964 12.75 3.75 12.1904 3.75 11.5V10C3.75 9.21199 3.41856 8.50138 2.88747 8C3.41856 7.49862 3.75 6.78801 3.75 6V4.5C3.75 3.80964 4.30964 3.25 5 3.25H6V1.75H5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5V10C13.75 9.30964 14.3096 8.75 15 8.75V7.25C14.3096 7.25 13.75 6.69036 13.75 6V4.5C13.75 2.98122 12.5188 1.75 11 1.75H10V3.25H11C11.6904 3.25 12.25 3.80964 12.25 4.5V6C12.25 6.78802 12.5814 7.49861 13.1125 8C12.5814 8.50138 12.25 9.21198 12.25 10V11.5C12.25 12.1904 11.6904 12.75 11 12.75H10V14.25H11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJsonOutlined16;

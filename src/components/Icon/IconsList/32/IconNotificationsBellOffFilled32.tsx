import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconNotificationsBellOffFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.6667 29C16.1333 29 17.3333 27.8 17.3333 26.3333H12C12 27.8 13.1867 29 14.6667 29ZM22.6667 14.3333C22.6667 10.24 20.48 6.81333 16.6667 5.90667V3H12.6667V5.90667C12.3467 5.98667 12.04 6.10667 11.7467 6.21333L22.6667 17.1333V14.3333ZM5.88 4.13333L4 6.01333L7.74667 9.76C7.05333 11.0933 6.66667 12.64 6.66667 14.3333V21L4 23.6667V25H22.9867L25.3067 27.32L27.1867 25.44L5.88 4.13333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled32;

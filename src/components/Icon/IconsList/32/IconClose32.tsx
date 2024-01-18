import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconClose32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M25.3334 8.54666L23.4534 6.66666L16.0001 14.12L8.54675 6.66666L6.66675 8.54666L14.1201 16L6.66675 23.4533L8.54675 25.3333L16.0001 17.88L23.4534 25.3333L25.3334 23.4533L17.8801 16L25.3334 8.54666Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconClose32;

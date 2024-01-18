import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHomeOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16.1176 7.79765L23.1765 14.1506V25.1765H20.3529V16.7059H11.8824V25.1765H9.05882V14.1506L16.1176 7.79765ZM16.1176 4L2 16.7059H6.23529V28H14.7059V19.5294H17.5294V28H26V16.7059H30.2353L16.1176 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHomeOutlined32;

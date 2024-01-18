import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconJsonOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.2 4.90002C6.93563 4.90002 5.1 6.73566 5.1 9.00002V13C5.1 14.0494 4.24934 14.9 3.2 14.9H3V17.1L3.2 17.1C4.24934 17.1 5.1 17.9507 5.1 19V23C5.1 25.2644 6.93563 27.1 9.2 27.1H11V24.9H9.2C8.15066 24.9 7.3 24.0494 7.3 23V19C7.3 17.8156 6.79777 16.7485 5.99466 16C6.79777 15.2516 7.3 14.1844 7.3 13V9.00002C7.3 7.95068 8.15066 7.10002 9.2 7.10002H11V4.90002H9.2Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M22.4 4.90002C24.6644 4.90002 26.5 6.73566 26.5 9.00002V13C26.5 14.0494 27.3507 14.9 28.4 14.9H29V17.1L28.4 17.1C27.3507 17.1 26.5 17.9507 26.5 19V23C26.5 25.2644 24.6644 27.1 22.4 27.1H20V24.9H22.4C23.4493 24.9 24.3 24.0494 24.3 23V19C24.3 17.8156 24.8022 16.7485 25.6053 16C24.8022 15.2516 24.3 14.1844 24.3 13V9.00002C24.3 7.95068 23.4493 7.10002 22.4 7.10002H20V4.90002H22.4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconJsonOutlined32;

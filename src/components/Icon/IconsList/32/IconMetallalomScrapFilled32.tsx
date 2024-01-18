import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetallalomScrapFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M15.15 5.8499H12V4.1499H20V5.8499H16.85V10.1543L22.3519 10.1579L28.2025 15.9992L23.601 20.6009L22.3989 19.3989L25.7974 16.0002L21.6481 11.8575L10.3516 11.8501L6.19782 15.9999L9.59006 19.3922L8.38798 20.5943L3.79309 15.9994L9.64836 10.1497L15.15 10.1532V5.8499Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0005 27.8321L2.00047 27.8499L1.99939 26.1499L5.65021 26.1476L13.6479 18.1499H18.352L26.3366 26.1344L29.9994 26.1321L30.0005 27.8321Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallalomScrapFilled32;

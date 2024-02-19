import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrapFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.35 3.65H6v-1.3h4v1.3H8.65v1.7h2.62l3.15 3.15-2.46 2.46-.92-.92 1.54-1.54-1.85-1.85H5.27L3.42 8.5l1.54 1.54-.92.92L1.58 8.5l3.15-3.15h2.62v-1.7Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 14.65H1v-1.3h1.943l3.85-3.85h2.414l3.85 3.85H15v1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrapFilled16;

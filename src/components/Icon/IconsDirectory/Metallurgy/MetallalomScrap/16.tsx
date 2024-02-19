import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrap16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.35 3.15H6v-1.3h4v1.3H8.65v1.7h2.62L14.42 8l-2.46 2.46-.92-.92L12.58 8l-1.85-1.85H5.27L3.42 8l1.54 1.54-.92.92L1.58 8l3.15-3.15h2.62v-1.7Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 14.15H1v-1.3h1.73l4-4h2.54l4 4H15v1.3Zm-3.57-1.3H4.57l2.7-2.7h1.46l2.7 2.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrap16;

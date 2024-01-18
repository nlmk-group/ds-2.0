import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconAutorenewSystemOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18 12H15L19 16L23 12H20C20 7.58 16.42 4 12 4C10.43 4 8.97 4.46 7.74 5.24L9.2 6.7C10.03 6.25 10.99 6 12 6C15.31 6 18 8.69 18 12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M16.26 18.76L14.8 17.3C13.96 17.74 13.01 18 12 18C8.69 18 6 15.31 6 12L9 12L5 8L1 12H4C4 16.42 7.58 20 12 20C13.57 20 15.03 19.54 16.26 18.76Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.656 13.707H13.041L13.572 15.3H14.76L12.51 9H11.25L9 15.3H10.134L10.656 13.707ZM12.726 12.753H10.971L11.43 11.376L11.853 10.08L12.726 12.753Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAutorenewSystemOutlined24;

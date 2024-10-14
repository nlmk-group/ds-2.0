import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMediabank24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.504 2.136A1 1 0 0 0 3 3v7a1 1 0 0 0 1.504.864l6-3.5a1 1 0 0 0 0-1.728l-6-3.5ZM8.015 6.5 5 8.259V4.741L8.015 6.5Zm-3.511 6.636A1 1 0 0 0 3 14v7a1 1 0 0 0 1.504.864l6-3.5a1 1 0 0 0 0-1.728l-6-3.5ZM8.015 17.5 5 19.259v-3.518L8.015 17.5Zm5.487-15.367a1 1 0 0 1 1.002.003l6 3.5a1 1 0 0 1 0 1.728l-6 3.5A1 1 0 0 1 13 10V3a1 1 0 0 1 .502-.867ZM15 8.259 18.015 6.5 15 4.741v3.518Zm-.496 4.877A1 1 0 0 0 13 14v7a1 1 0 0 0 1.504.864l6-3.5a1 1 0 0 0 0-1.728l-6-3.5Zm3.511 4.364L15 19.259v-3.518l3.015 1.759Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMediabank24;

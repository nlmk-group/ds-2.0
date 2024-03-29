import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLotok24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 8.25h1.406l2.009 8.51h13.177l2.002-8.51H22v-1.5H2v1.5Zm4.602 7.01L4.948 8.25h14.105l-1.65 7.01h-10.8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 19.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm9.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
      />
    </svg>
  );
};

export default IconLotok24;

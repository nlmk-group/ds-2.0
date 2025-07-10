import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileNoType32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.7 1h16.2L30 9.182v19.09c0 1.5-1.215 2.728-2.7 2.728H5.686C4.202 31 3 29.773 3 28.273l.014-24.546C3.014 2.227 4.215 1 5.7 1Zm0 2.727v24.546h21.6V10.546h-4.725A2.035 2.035 0 0 1 20.55 8.5V3.727H5.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileNoType32;

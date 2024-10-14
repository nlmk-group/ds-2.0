// 16x16
import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToMachine16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.333 14H10a1.334 1.334 0 0 1-1.333-1.333V10H10v2.667h3.333V3.333H10V6H8.667V3.333A1.333 1.333 0 0 1 10 2h3.333a1.333 1.333 0 0 1 1.334 1.333v9.334A1.333 1.333 0 0 1 13.333 14Zm-8-5.333H.667V7.333h4.666V5.335L8 8l-2.667 2.665V8.668Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToMachine16;

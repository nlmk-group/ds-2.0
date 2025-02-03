import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const UnfoldLess32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.178 28 9 25.9l7-6.75 7 6.75-2.178 2.1L16 23.35 11.178 28ZM16 12.85 9 6.1 11.178 4 16 8.65 20.822 4 23 6.1l-7 6.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default UnfoldLess32;

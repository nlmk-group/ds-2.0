import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChannel32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M26.667 21.333a4 4 0 0 0-2.307.747l-7.026-4.746v-6.907a4 4 0 1 0-2.667 0v6.907L7.64 22.08a4 4 0 0 0-2.306-.747 4 4 0 1 0 4 4 4 4 0 0 0-.16-1.066L16 19.687l6.827 4.58a4 4 0 1 0 3.84-2.934ZM5.333 26.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.666ZM16 5.332A1.333 1.333 0 1 1 16 8 a1.333 1.333 0 0 1 0-2.666Zm0 14.354V18v1.687Zm10.667 6.98a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.666Z"
      />
    </svg>
  );
};

export default IconChannel32;

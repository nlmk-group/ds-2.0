import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockCloseFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M24 11.333h2.667A1.333 1.333 0 0 1 28 12.667v16A1.334 1.334 0 0 1 26.667 30H5.333A1.334 1.334 0 0 1 4 28.667v-16a1.333 1.333 0 0 1 1.333-1.334H8V10a8 8 0 0 1 16 0v1.333Zm-9.333 10.31v3.024h2.666v-3.024a2.667 2.667 0 1 0-2.666 0Zm6.666-10.31V10a5.333 5.333 0 1 0-10.666 0v1.333h10.666Z"
      />
    </svg>
  );
};

export default IconLockCloseFilled32;

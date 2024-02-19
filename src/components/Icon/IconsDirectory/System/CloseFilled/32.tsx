import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.678 7.046a1.86 1.86 0 0 0-2.632 0 1.86 1.86 0 0 0 0 2.632L13.368 16l-6.322 6.322a1.86 1.86 0 0 0 0 2.632 1.86 1.86 0 0 0 2.632 0L16 18.632l6.322 6.322a1.86 1.86 0 0 0 2.632 0 1.86 1.86 0 0 0 0-2.632L18.632 16l6.322-6.322a1.868 1.868 0 0 0 0-2.619 1.86 1.86 0 0 0-2.632 0L16 13.37 9.678 7.045Z"
      />
    </svg>
  );
};

export default IconCloseFilled32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowUpFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.684 8.347 8 2.267l-5.685 6.08 1.594 1.705 2.948-3.153V14.5h2.286V6.899l2.948 3.153 1.594-1.705Z"
      />
    </svg>
  );
};

export default ArrowUpFilled16;

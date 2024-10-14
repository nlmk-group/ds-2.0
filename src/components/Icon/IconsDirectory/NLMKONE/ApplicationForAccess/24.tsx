import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconApplicationForAccess24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 1a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8v-2H3V3h12v4h2V3a2 2 0 0 0-2-2H3Zm9 5H5v2h7V6Zm-7 4h4v2H5v-2Zm17 1h1V9H13v2h1v2a3.99 3.99 0 0 0 1.354 3A3.99 3.99 0 0 0 14 19v2h-1v2h10v-2h-1v-2a3.99 3.99 0 0 0-1.354-3A3.99 3.99 0 0 0 22 13v-2Zm-4 6a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2Zm2-6h-4v2a2 2 0 1 0 4 0v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconApplicationForAccess24;

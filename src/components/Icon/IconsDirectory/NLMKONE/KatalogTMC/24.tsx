import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKatalogTMC24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 18V6h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3Zm9 .646A3.99 3.99 0 0 1 9 20H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 4h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7a3.99 3.99 0 0 1-3-1.354ZM13 8v8a2 2 0 0 0 2 2h6V6h-6a2 2 0 0 0-2 2Zm-8 2h4V8H5v2Zm14 0h-4V8h4v2ZM5 13h4v-2H5v2Zm14 0h-4v-2h4v2ZM5 14h4v2H5v-2Zm14 0h-4v2h4v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKatalogTMC24;

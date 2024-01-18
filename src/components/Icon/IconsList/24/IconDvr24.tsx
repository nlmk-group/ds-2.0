import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDvr24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21C22.1 3 23 3.9 23 5V17C23 18.1 22.1 19 21 19H16V21H8V19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3ZM3 17H21V5H3V17ZM19 8H8V10H19V8ZM8 12H19V14H8V12ZM7 8H5V10H7V8ZM5 12H7V14H5V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDvr24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReservedFrom24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.121 3.414 5.83 5.707h6.585v2H5.83L8.12 10l-1.414 1.414L2 6.707 6.707 2l1.414 1.414ZM14 8a6 6 0 1 1-6 6H6a8 8 0 1 0 8-8v2Zm-1 6V9h2v4h3v2h-5v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconReservedFrom24;

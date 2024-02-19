import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5 6.99 9 3l4 3.99h-3V14H8V6.99H5ZM16 10v7.01h3L15 21l-4-3.99h3V10h2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertOutlined24;

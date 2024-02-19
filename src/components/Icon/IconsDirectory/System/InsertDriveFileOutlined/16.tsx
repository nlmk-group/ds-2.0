import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertDriveFileOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 13.995v-8.66l-4.002-4h-7.33a.67.67 0 0 0-.668.66v12.011c0 .366.297.662.662.662h10.676a.666.666 0 0 0 .662-.671ZM9.333 6h3.334v7.334H3.333V2.667h6V6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertDriveFileOutlined16;

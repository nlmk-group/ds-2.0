import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconResizingOutlined12: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m1.354 11.354 10-10-.707-.708-10 10 .707.708ZM6.377 11.328l4.95-4.949-.708-.707-4.95 4.949.708.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconResizingOutlined12;

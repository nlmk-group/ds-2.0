import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPersonOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 5.5A3.51 3.51 0 0 1 19.5 9a3.51 3.51 0 0 1-3.5 3.5A3.51 3.51 0 0 1 12.5 9 3.51 3.51 0 0 1 16 5.5Zm0 15.75c4.725 0 10.15 2.258 10.5 3.5v1.75h-21v-1.733c.35-1.26 5.775-3.517 10.5-3.517ZM16 2c-3.867 0-7 3.133-7 7s3.133 7 7 7 7-3.133 7-7-3.133-7-7-7Zm0 15.75c-4.672 0-14 2.345-14 7V30h28v-5.25c0-4.655-9.328-7-14-7Z"
      />
    </svg>
  );
};

export default IconPersonOutlined32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 3h18v5.4h-1.8v6.3H21v5.4h-5.4v-5.4h1.8V8.4H6.6v6.3h1.8v5.4H3v-5.4h1.8V8.4H3V3Zm16.2 1.8v1.8H4.8V4.8h14.4ZM4.8 18.3v-1.8h1.8v1.8H4.8Zm12.6-1.8v1.8h1.8v-1.8h-1.8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.7 10.2H9.3v5.4h5.4v-5.4Zm-3.6 3.6V12h1.8v1.8h-1.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMnemoOutlined24;

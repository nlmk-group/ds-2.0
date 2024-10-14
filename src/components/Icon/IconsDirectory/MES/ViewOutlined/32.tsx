import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M30.267 30.267a1.332 1.332 0 0 1-1.886 0l-2.923-2.923a6.667 6.667 0 1 1 1.886-1.886l2.923 2.923a1.335 1.335 0 0 1 0 1.886ZM24.61 18.953a4 4 0 1 0-5.656 5.658 4 4 0 0 0 5.655-5.658ZM24 5.333H5.333V24h7.444a9.195 9.195 0 0 0 1.14 2.667H5.333A2.667 2.667 0 0 1 2.667 24V5.333a2.667 2.667 0 0 1 2.666-2.666H24a2.667 2.667 0 0 1 2.667 2.666v8.584A9.198 9.198 0 0 0 24 12.777V5.334Zm-16 16v-2.666h5.028a9.215 9.215 0 0 0-.517 2.666H8ZM8 8h13.333v2.667H8V8Zm6.507 8H8v-2.667h9.333v.288A9.29 9.29 0 0 0 14.507 16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewOutlined32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInstruction32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.243 9.03a1 1 0 0 0-.485 1.94l6 1.5a1 1 0 1 0 .485-1.94l-6-1.5ZM6.03 14.758a1 1 0 0 1 1.213-.728l6 1.5a1 1 0 1 1-.485 1.94l-6-1.5a1 1 0 0 1-.728-1.213ZM6.03 19.758a1 1 0 0 1 1.213-.728l6 1.5a1 1 0 1 1-.485 1.94l-6-1.5a1 1 0 0 1-.728-1.212ZM25.243 10.97a1 1 0 1 0-.485-1.94l-6 1.5a1 1 0 1 0 .485 1.94l6-1.5ZM25.243 15.97a1 1 0 1 0-.485-1.94l-6 1.5a1 1 0 1 0 .485 1.94l6-1.5ZM25.243 20.97a1 1 0 1 0-.485-1.94l-6 1.5a1 1 0 1 0 .485 1.94l6-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.26 3.84A1 1 0 0 0 3 4.804v20.247c0 .532.417.97.947 1.006 3.891.268 6.492.857 10.053 2.171.632.233 1.295.49 2 .771a83.161 83.161 0 0 1 2-.771c3.561-1.314 6.162-1.903 10.053-2.171.53-.037.947-.474.947-1.006V4.805a1 1 0 0 0-1.26-.966L16 7 4.26 3.84ZM5 6.11v18.024c3.375.291 6.892 1.332 10 2.435V9L5 6.11Zm22 0v18.024c-3.375.291-6.892 1.332-10 2.435V9l10-2.89Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInstruction32;

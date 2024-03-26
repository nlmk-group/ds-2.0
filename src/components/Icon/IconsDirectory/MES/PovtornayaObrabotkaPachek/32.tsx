import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPovtornayaObrabotkaPachek32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M17.12 3h-2.24v1.357h2.24V3Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 7.522c0-.75.602-1.357 1.345-1.357h7.172a1.35 1.35 0 0 1 1.345 1.357v16.956a1.35 1.35 0 0 1-1.345 1.357H4.345A1.35 1.35 0 0 1 3 24.478V7.522Zm2.241 16.052V8.426h5.38v15.148H5.24Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.88 6.843h2.24v2.714h-2.24V6.843Zm2.24 5.2h-2.24v2.714h2.24v-2.713Zm-2.24 5.201h2.24v2.712h-2.24v-2.712Zm2.24 5.2h-2.24v2.713h2.24v-2.713Zm-2.24 5.199h2.24V29h-2.24v-1.357Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.138 7.522c0-.75.602-1.357 1.345-1.357h7.172A1.35 1.35 0 0 1 29 7.522v16.956a1.35 1.35 0 0 1-1.345 1.357h-7.172a1.35 1.35 0 0 1-1.345-1.357V7.522Zm2.241 16.052V8.426h5.38v15.148h-5.38Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPovtornayaObrabotkaPachek32;

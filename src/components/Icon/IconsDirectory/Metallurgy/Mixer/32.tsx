import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixer32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.737 13.957A10.46 10.46 0 0 1 15.15 5.57v3.238a7.239 7.239 0 0 0-1.92 13.88 7.241 7.241 0 0 0 9.976-7.398 7.243 7.243 0 0 0-2.087-4.41l-1.202 1.201a5.543 5.543 0 0 1 .69 6.997 5.538 5.538 0 0 1-9.493-.468 5.541 5.541 0 0 1 4.036-8.087v3.124a2.5 2.5 0 1 0 1.7 0V3.84c-3.118-.013-6.109.738-8.568 2.756a12.16 12.16 0 0 0-3.009 15.137 12.168 12.168 0 0 0 14.26 5.907A12.16 12.16 0 0 0 24.6 7.4l-1.202 1.202A10.467 10.467 0 0 1 24.7 21.815a10.459 10.459 0 0 1-12.704 3.852 10.468 10.468 0 0 1-6.26-11.71Z"
      />
    </svg>
  );
};

export default IconMixer32;

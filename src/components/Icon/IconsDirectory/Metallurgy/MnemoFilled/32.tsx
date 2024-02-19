import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 4h26v7.579h-2.6v8.842H29V28h-7.8v-7.579h2.6V11.58H8.2v8.842h2.6V28H3v-7.579h2.6V11.58H3V4Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.9 14.105h-7.8v7.58h7.8v-7.58Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMnemoFilled32;

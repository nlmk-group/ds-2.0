import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLessOrEqual32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 26.996H7.36v-2.761H25v2.761ZM25 23 7 14l18-9v3.305L13.61 14 25 19.695V23Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLessOrEqual32;

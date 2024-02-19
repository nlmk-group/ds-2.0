import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M4 12.667 16 6l12 6.667v8.889h-2.182v-7.678l-9.825 5.458L4 12.666Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.364 17.497v4.259L16 26l7.636-4.244v-4.26l-7.643 4.243-7.63-4.242Z"
      />
    </svg>
  );
};

export default IconEducationFilled32;

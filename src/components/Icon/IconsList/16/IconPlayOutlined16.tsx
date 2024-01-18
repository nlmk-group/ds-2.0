import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPlayOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6.6 11.15L10.8 8L6.6 4.85V11.15ZM8 1C4.136 1 1 4.136 1 8C1 11.864 4.136 15 8 15C11.864 15 15 11.864 15 8C15 4.136 11.864 1 8 1ZM8 13.6C4.913 13.6 2.4 11.087 2.4 8C2.4 4.913 4.913 2.4 8 2.4C11.087 2.4 13.6 4.913 13.6 8C13.6 11.087 11.087 13.6 8 13.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPlayOutlined16;

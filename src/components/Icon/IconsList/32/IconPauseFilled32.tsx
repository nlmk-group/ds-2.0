import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPauseFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M6 28H12.8571V4H6V28ZM19.7143 4V28H26.5714V4H19.7143Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconPauseFilled32;

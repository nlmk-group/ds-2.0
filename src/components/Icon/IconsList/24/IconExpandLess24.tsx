import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconExpandLess24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M7.41 16L12 11.42L16.59 16L18 14.59L12 8.59L6 14.59L7.41 16Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconExpandLess24;

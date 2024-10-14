import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFNInvestments24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 5.997a1 1 0 0 0-1-1L13.916 5v2H17.5l-5.102 4.939-1.839-1.78a1 1 0 0 0-1.359-.03l-7.198 6.378 1.326 1.497 6.505-5.764 1.87 1.81a1 1 0 0 0 1.39 0L19 8.328v3.529h2v-5.86Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFNInvestments24;

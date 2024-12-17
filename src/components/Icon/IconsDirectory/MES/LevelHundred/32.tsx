import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelHundred32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 10.477 4.477 6 10 6h12c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 26 0 21.523 0 16Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelHundred32;
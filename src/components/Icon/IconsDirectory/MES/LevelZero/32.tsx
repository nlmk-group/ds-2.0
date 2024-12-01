import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelZero32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 7H10a9 9 0 1 0 0 18h12a9 9 0 1 0 0-18ZM10 6C4.477 6 0 10.477 0 16s4.477 10 10 10h12c5.523 0 10-4.477 10-10S27.523 6 22 6H10Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelZero32;

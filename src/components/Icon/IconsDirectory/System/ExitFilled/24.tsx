import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14 3H6a2 2 0 0 0-2 2.002v14.016C4 20.119 4.9 21 6 21h8c1.1 0 2-.881 2-1.982v-4.015h-1V15H8.5V8.997H16V5.002C16 3.901 15.1 3 14 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m22 12-4 4.005V13h-8v-2h8V7.996L22 12Z" />
    </svg>
  );
};

export default IconExitFilled24;

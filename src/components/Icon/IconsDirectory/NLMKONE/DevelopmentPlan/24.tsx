import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDevelopmentPlan24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17 4H6v15H4V4c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v6.15h-2V4Zm-2 4H8V6h7v2Zm-7 4h4v-2H8v2Zm12.29 1.367a1 1 0 0 1 .293.707v4.364h-2v-2.02l-3.96 3.834a1 1 0 0 1-1.392 0L12.01 19.07l-4.666 4.134-1.326-1.497 5.359-4.748a1 1 0 0 1 1.358.03l1.192 1.153 3.167-3.067h-2.039v-2h4.528a1 1 0 0 1 .707.292Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDevelopmentPlan24;

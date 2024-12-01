import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFunnel16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          d="M9.25 10v5.253a.665.665 0 0 1-.383.698.59.59 0 0 1-.68-.144l-1.256-1.34a.667.667 0 0 1-.15-.254.701.701 0 0 1-.03-.3V10h-.02l-3.6-4.92a.7.7 0 0 1 .107-.933A.626.626 0 0 1 3.626 4h8.748c.138 0 .27.053.388.147a.7.7 0 0 1 .106.933L9.268 10H9.25Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconFunnel16;

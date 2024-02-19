import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftUpOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.333 2a1 1 0 0 1 .718.304L9.385 5.74a1 1 0 0 1-1.436 1.393L6.333 5.468V7.4c0 1.171.001 1.991.052 2.63.05.629.143.995.28 1.275a3.07 3.07 0 0 0 1.318 1.36c.26.137.604.232 1.207.282.615.052 1.406.053 2.543.053H14a1 1 0 1 1 0 2h-2.31c-1.083 0-1.959 0-2.668-.06-.731-.061-1.375-.192-1.97-.504a5.064 5.064 0 0 1-2.18-2.245c-.297-.603-.422-1.255-.481-2.003-.058-.727-.058-1.627-.058-2.746V5.468L2.718 7.134A1 1 0 0 1 1.282 5.74l3.333-3.437A1 1 0 0 1 5.333 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftUpOutlined16;

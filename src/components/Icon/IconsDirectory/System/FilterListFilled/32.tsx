import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterListFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M31.5 5.5H.5v4.333h31V5.5Zm-5 8.334h-21v4.333h21v-4.334Zm-6.667 8.333h-7.666V26.5h7.666v-4.333Z"
      />
    </svg>
  );
};

export default IconFilterListFilled32;

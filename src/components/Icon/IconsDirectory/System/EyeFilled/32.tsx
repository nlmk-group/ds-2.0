import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1.575 16C2.828 9.173 8.81 4 16 4s13.17 5.173 14.425 12C29.172 22.827 23.19 28 16 28S2.83 22.827 1.575 16ZM16 22.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334ZM12 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconEyeFilled32;

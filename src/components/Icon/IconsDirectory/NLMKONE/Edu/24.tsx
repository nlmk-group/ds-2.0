import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEdu24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11.06 3.296a2.1 2.1 0 0 1 1.88 0l9.466 4.733c1.006.503 1.006 1.939 0 2.442l-9.467 4.733a2.1 2.1 0 0 1-1.878 0l-9.467-4.733c-1.006-.503-1.006-1.939 0-2.442l9.467-4.733ZM3.849 9.25 12 13.326l8.152-4.076L12 5.174 3.848 9.25Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.25 16.156v-4.801h2.1v4.8a2.1 2.1 0 0 1-1.148 1.872l-5.24 2.667a2.1 2.1 0 0 1-1.902.001L5.8 18.028a2.1 2.1 0 0 1-1.15-1.873v-4.8h2.1v4.8l5.26 2.667 5.24-2.666ZM22 8.2c.58 0 1.05.47 1.05 1.05v5.25a1.05 1.05 0 1 1-2.1 0V9.25c0-.58.47-1.05 1.05-1.05Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEdu24;

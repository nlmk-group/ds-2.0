import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLightningFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeWidth="1.524"
        d="M16.119 13.143h7.62L13.308 26.69l1.286-8.976H8.5L13.31 4h6.857l-4.048 9.143Z"
      />
    </svg>
  );
};

export default IconLightningFilled32;

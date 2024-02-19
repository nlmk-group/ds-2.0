import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCrane32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.65 2v5.85h.85A4.15 4.15 0 1 1 12.35 12h-1.7a5.85 5.85 0 0 0 2.9 5.052l-3.106 7.098H2.5v1.7h28v-1.7h-7.944l-3.106-7.098a5.852 5.852 0 0 0 .3-9.916 5.85 5.85 0 0 0-2.4-.924V2h-1.7Zm2.223 15.687a5.844 5.844 0 0 1-2.746 0L12.3 24.15h8.4l-2.827-6.463Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M2.5 29.85h28v-1.7h-28v1.7Z" />
    </svg>
  );
};

export default IconTackleCrane32;

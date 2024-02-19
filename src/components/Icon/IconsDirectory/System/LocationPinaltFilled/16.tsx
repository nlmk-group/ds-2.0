import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.24 6.09A1.252 1.252 0 0 1 8 7.494a1.25 1.25 0 0 1-.884-.367 1.22 1.22 0 0 1-.366-.884m2.49-.153A1.25 1.25 0 0 0 9.227 6c-.07-.356-.166-.464-.339-.637l-.003-.004a1.25 1.25 0 0 0-2.134.885m1.01 5.71a.624.624 0 0 1-.204-.137L5 9.252A4.249 4.249 0 0 1 8 2a4.241 4.241 0 0 1 3.92 2.623A4.25 4.25 0 0 1 11 9.252l-2.556 2.564a.624.624 0 0 1-.684.137Zm-4.577 1.48a.625.625 0 0 1 .442-.184h8.75a.625.625 0 0 1 0 1.251h-8.75a.625.625 0 0 1-.442-1.068Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLocationPinaltFilled16;

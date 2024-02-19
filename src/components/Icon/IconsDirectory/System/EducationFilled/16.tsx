import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.407 6.169 8 2.506l6.593 3.663v4.883h-1.198V6.834L8.002 9.828l-6.595-3.66Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.804 8.76v2.402L8 13.494l4.196-2.332V8.76l-4.194 2.325L3.804 8.76Z"
      />
    </svg>
  );
};

export default IconEducationFilled16;

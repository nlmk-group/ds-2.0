import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M31.394 16 18.342 2.565l-4.134 4.254 8.9 9.181-8.9 9.18 4.134 4.255L31.394 16Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.793 16 4.74 2.565.607 6.819 9.507 16l-8.9 9.18 4.133 4.255L17.793 16Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronFilled32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDesktopOff24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M17 6.0071L15.9929 5L12 8.9929L8.0071 5L7 6.0071L10.9929 10L7 13.9929L8.0071 15L12 11.0071L15.9929 15L17 13.9929L13.0071 10L17 6.0071Z"
        fill="#F38585"
      />
    </svg>
  );
};

export default IconDesktopOff24;

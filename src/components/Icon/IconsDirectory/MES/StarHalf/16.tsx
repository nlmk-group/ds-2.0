import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStarHalf16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 9.193h1.834L12 7.37l-2.851-.235L8 4.5 6.851 7.135 4 7.37l2.166 1.823H8ZM3.983 14l1.066-4.44L1.5 6.573l4.673-.386L8 2l1.826 4.187 4.674.386-3.549 2.987L12.017 14 8 11.644 3.983 14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconStarHalf16;

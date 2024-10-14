import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSwitchHorizontal24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.377 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.67 8H4.084a1 1 0 0 1 0-2H17.67l-2.293-2.293a1 1 0 0 1 0-1.414Zm-6.586 10a1 1 0 0 1 0 1.414L6.498 16h13.586a1 1 0 1 1 0 2H6.498l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSwitchHorizontal24;

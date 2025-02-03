import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const UnfoldLess24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.556 21 7 19.425l5-5.063 5 5.063L15.444 21 12 17.512 8.556 21ZM12 9.637 7 4.575 8.556 3 12 6.487 15.444 3 17 4.575l-5 5.062Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default UnfoldLess24;

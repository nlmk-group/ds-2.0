import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStarFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m16 23.592 8.343 4.908-2.214-9.25 7.371-6.224-9.706-.802L16 3.5l-3.793 8.724-9.707.802 7.371 6.224-2.214 9.25L16 23.592Z"
      />
    </svg>
  );
};

export default IconStarFilled32;

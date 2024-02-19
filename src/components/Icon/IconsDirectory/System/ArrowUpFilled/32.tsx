import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowUpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M27.717 15.209 16.5 4.303 5.283 15.209l2.626 2.553 6.741-6.554V26.5h3.7V11.208l6.741 6.554 2.626-2.553Z"
      />
    </svg>
  );
};

export default ArrowUpFilled32;

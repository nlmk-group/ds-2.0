import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ArrowRightFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m20.697 12-8.475-8.717-2.111 2.171 4.877 5.017H3.5v3.057h11.489l-4.878 5.018 2.111 2.171L20.697 12Z"
      />
    </svg>
  );
};

export default ArrowRightFilled24;

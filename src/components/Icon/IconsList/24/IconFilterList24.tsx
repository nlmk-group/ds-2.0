import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterList24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.00012V8.00012H21V6.00012H3ZM10 18.0003H14V16.0003H10V18.0003ZM18.0002 13.0003H6.00016V11.0003H18.0002V13.0003Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterList24;

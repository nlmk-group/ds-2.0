import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBasketBuying32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        d="M28.853 9.842a.812.812 0 0 0-.664-.344H10.86L9.547 4.974C9.033 3.192 7.81 3 7.31 3h-3.5a.81.81 0 1 0 0 1.622h3.497c.111 0 .449 0 .679.795L12.5 22.003a.81.81 0 0 0 .78.591h11.024a.81.81 0 0 0 .763-.536l3.885-11.475a.811.811 0 0 0-.1-.74Zm-5.12 11.131h-9.837l-2.581-9.853h15.722l-3.304 9.853Zm-1.608 3.265a2.041 2.041 0 1 0-.001 4.082 2.041 2.041 0 0 0 0-4.082Zm-7.35 0a2.041 2.041 0 1 0 0 4.082 2.041 2.041 0 0 0 0-4.082Z"
      />
    </svg>
  );
};

export default IconBasketBuying32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHourglassEmptyOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9 4V11.2H9.012L9 11.212L13.8 16L9 20.8L9.012 20.812H9V28H23.4V20.812H23.388L23.4 20.8L18.6 16L23.4 11.212L23.388 11.2H23.4V4H9ZM21 21.4V25.6H11.4V21.4L16.2 16.6L21 21.4ZM16.2 15.4L11.4 10.6V6.4H21V10.6L16.2 15.4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined32;

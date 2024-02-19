import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.667 2H3.333C2.6 2 2 2.594 2 3.335v9.343C2 13.413 2.6 14 3.333 14h5.334C9.4 14 10 13.413 10 12.678v-2.676H4.995V5.997H10V3.336C10 2.6 9.4 2 8.667 2Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m14 8-2.667 2.67V8.667H6V7.333h5.333V5.33L14 8Z" />ч
    </svg>
  );
};

export default IconExitFilled16;

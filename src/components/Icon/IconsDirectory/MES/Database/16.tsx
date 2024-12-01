import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDatabase16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8 2C5.054 2 2.667 3.193 2.667 4.667v6.666C2.667 12.807 5.06 14 8 14c2.94 0 5.334-1.193 5.334-2.667V4.667C13.334 3.193 10.947 2 8 2Zm4 9.333c0 .334-1.42 1.334-4 1.334s-4-1-4-1.334V9.847c1.074.52 2.48.82 4 .82s2.927-.3 4-.82v1.486ZM12 8.3c-.866.633-2.386 1.033-4 1.033-1.613 0-3.133-.4-4-1.033V6.427c.98.553 2.407.906 4 .906 1.594 0 3.02-.353 4-.906V8.3ZM8 6C5.42 6 4 5 4 4.667c0-.334 1.42-1.334 4-1.334s4 1 4 1.334C12 5 10.58 6 8 6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDatabase16;

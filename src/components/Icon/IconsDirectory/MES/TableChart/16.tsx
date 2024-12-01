import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTableChart16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 5.333v-2c0-.366.13-.68.392-.941.261-.26.575-.392.941-.392h9.334c.366 0 .68.13.942.392.261.261.391.575.391.941v2H2ZM3.333 14c-.366 0-.68-.13-.941-.391A1.286 1.286 0 0 1 2 12.667v-6h3V14H3.333ZM11 14V6.667h3v6c0 .366-.13.68-.391.942-.261.261-.575.391-.942.391H11Zm-4.667 0V6.667h3.334V14H6.333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTableChart16;

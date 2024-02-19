import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.297 10.017V9a5.232 5.232 0 0 0-1.08-3.194 5.375 5.375 0 0 0-2.46-1.799A1.058 1.058 0 0 0 8.702 3H7.297c-.564 0-1.027.447-1.054 1.007a5.376 5.376 0 0 0-2.46 1.799A5.232 5.232 0 0 0 2.702 9v1.017c-.703 0-.703 0-.703 1.08s0 1.08 1.055 1.08h9.89c1.055 0 1.055.04 1.055-1.06s0-1.1-.703-1.1ZM3.407 9c0-1.273.54-2.464 1.429-3.314v1.196h.703v-1.75c.222-.142.456-.266.703-.369v2.825h.703V4.06c0-.195.158-.353.352-.353h1.406c.194 0 .352.158.352.353v3.53h.703V4.762c.246.103.481.227.703.37v1.75h.703V5.685A4.602 4.602 0 0 1 12.594 9v1.017l-9.188.042v-1.06Zm9.538 2.47h-9.89c-.194 0-.352 0-.352-.353s.158-.353.352-.353h9.89c.194 0 .352 0 .352.354 0 .352-.158.352-.352.352Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetOutlined16;

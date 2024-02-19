import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeOffOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.437 18.88A9.975 9.975 0 0 1 12 20.484c-4.984 0-9.13-3.658-10-8.485A10.412 10.412 0 0 1 5.087 6.28L2.195 3.334 3.503 2l18.3 18.667L20.495 22l-3.06-3.12h.002ZM6.394 7.615A8.49 8.49 0 0 0 3.887 12a8.559 8.559 0 0 0 1.693 3.51 8.342 8.342 0 0 0 3.055 2.363 8.18 8.18 0 0 0 7.454-.37l-1.874-1.911a4.094 4.094 0 0 1-5.158-.59 4.31 4.31 0 0 1-.578-5.261L6.393 7.616Zm6.45 6.579-2.996-3.057a2.401 2.401 0 0 0-.111 1.343c.092.45.31.861.628 1.186.318.324.722.547 1.162.64.44.094.898.055 1.317-.113Zm7.296 2.134-1.322-1.348A8.507 8.507 0 0 0 20.113 12a8.57 8.57 0 0 0-1.389-3.11 8.385 8.385 0 0 0-2.478-2.301 8.215 8.215 0 0 0-3.167-1.117 8.166 8.166 0 0 0-3.342.247L8.28 4.232A9.982 9.982 0 0 1 12 3.515c4.984 0 9.13 3.658 10 8.485a10.424 10.424 0 0 1-1.86 4.33Zm-8.396-8.564a4.085 4.085 0 0 1 1.729.267A4.151 4.151 0 0 1 14.942 9c.416.425.74.935.948 1.498a4.32 4.32 0 0 1 .262 1.763l-4.409-4.496h.001Z"
      />
    </svg>
  );
};

export default IconEyeOffOutlined24;

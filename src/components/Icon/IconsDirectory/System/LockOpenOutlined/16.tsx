import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockOpenOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.625 5.667h-.688V4.333C10.938 2.493 9.398 1 7.5 1 5.603 1 4.062 2.493 4.062 4.333h1.375c0-1.106.922-2 2.063-2s2.063.894 2.063 2v1.334H3.375C2.619 5.667 2 6.267 2 7v6.667C2 14.4 2.619 15 3.375 15h8.25c.756 0 1.375-.6 1.375-1.333V7c0-.733-.619-1.333-1.375-1.333Zm0 8h-8.25V7h8.25v6.667Zm-4.125-2c.756 0 1.375-.6 1.375-1.334C8.875 9.6 8.256 9 7.5 9s-1.375.6-1.375 1.333c0 .734.619 1.334 1.375 1.334Z"
      />
    </svg>
  );
};

export default IconLockOpenOutlined16;

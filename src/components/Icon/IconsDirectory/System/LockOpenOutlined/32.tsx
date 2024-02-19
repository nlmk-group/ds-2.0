import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockOpenOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.375 11.333h-1.313V8.667C22.063 4.987 19.122 2 15.5 2c-3.623 0-6.563 2.987-6.563 6.667h2.626c0-2.214 1.758-4 3.937-4s3.938 1.786 3.938 4v2.666H7.624C6.181 11.333 5 12.533 5 14v13.333C5 28.8 6.181 30 7.625 30h15.75C24.819 30 26 28.8 26 27.333V14c0-1.467-1.181-2.667-2.625-2.667Zm0 16H7.625V14h15.75v13.333Zm-7.875-4c1.444 0 2.625-1.2 2.625-2.666C18.125 19.2 16.944 18 15.5 18s-2.625 1.2-2.625 2.667c0 1.466 1.181 2.666 2.625 2.666Z"
      />
    </svg>
  );
};

export default IconLockOpenOutlined32;

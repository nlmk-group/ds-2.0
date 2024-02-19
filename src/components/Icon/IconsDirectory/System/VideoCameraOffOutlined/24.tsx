import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVideoCameraOffOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m9.56 8.14-2-2L3.41 2 2 3.41l2.73 2.73H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18l3.18 3.18 1.41-1.41-8.86-8.86-2.72-2.73Zm-4.56 8v-8h1.73l8 8H5Zm10-5.39V8.14h-2.61l-2-2H16c.55 0 1 .45 1 1v3.5l4-4v10.11l-6-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVideoCameraOffOutlined24;

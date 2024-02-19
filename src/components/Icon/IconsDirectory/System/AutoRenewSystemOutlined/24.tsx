import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewSystemOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18 12h-3l4 4 4-4h-3c0-4.42-3.58-8-8-8-1.57 0-3.03.46-4.26 1.24L9.2 6.7c.83-.45 1.79-.7 2.8-.7 3.31 0 6 2.69 6 6Zm-1.74 6.76L14.8 17.3c-.84.44-1.79.7-2.8.7-3.31 0-6-2.69-6-6h3L5 8l-4 4h3c0 4.42 3.58 8 8 8 1.57 0 3.03-.46 4.26-1.24Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.656 13.707h2.385l.531 1.593h1.188L12.51 9h-1.26L9 15.3h1.134l.522-1.593Zm2.07-.954h-1.755l.459-1.377.423-1.296.873 2.673Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewSystemOutlined24;

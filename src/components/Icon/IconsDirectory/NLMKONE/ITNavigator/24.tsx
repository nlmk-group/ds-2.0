import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconITNavigator24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17.5 2.5H22v4.5l-5.5 5.5h-4l-2 2-4.793-4.792a6.965 6.965 0 0 0-2.207 1.5c3.09 3.09 8.126 2.611 11.416-.678L22 2.5H17.5zM5.5 3a1 1 0 0 1 1 1V9a7 7 0 0 0-7 7 7 7 0 0 0 9 6.938v-2.016a5.002 5.002 0 0 1-7-4.922A5.002 5.002 0 0 1 9 11h11a1 1 0 0 1 1 1v8h2v-8a2 2 0 0 0-2-2H9a7 7 0 0 0-3.5-.938V4a1 1 0 0 1 1-1H12V2H8a3 3 0 0 0-3 3v.5H4V3a1 1 0 0 1 1-1H5.5zM6 12h12v6H6v-6zm14 0h1v2h-2v-2h1z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconITNavigator24;

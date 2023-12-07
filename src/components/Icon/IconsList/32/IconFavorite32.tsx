import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFavorite32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.372 12.3621L28 13.1453L21.46 19.12L23.416 28L16 23.2884L8.584 28L10.552 19.12L4 13.1453L12.628 12.3747L16 4L19.372 12.3621ZM11.488 23.7937L16 20.9263L20.524 23.8063L19.324 18.4L23.308 14.7621L18.052 14.2821L16 9.17895L13.96 14.2695L8.704 14.7495L12.688 18.3874L11.488 23.7937Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFavorite32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconErrorOutline32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        d="M15.9865 2.66675C8.6265 2.66675 2.6665 8.64008 2.6665 16.0001C2.6665 23.3601 8.6265 29.3334 15.9865 29.3334C23.3598 29.3334 29.3332 23.3601 29.3332 16.0001C29.3332 8.64008 23.3598 2.66675 15.9865 2.66675ZM17.3332 17.3334V9.33341H14.6665V17.3334H17.3332ZM17.3332 22.6667V20.0001H14.6665V22.6667H17.3332ZM5.33317 16.0001C5.33317 21.8934 10.1065 26.6667 15.9998 26.6667C21.8932 26.6667 26.6665 21.8934 26.6665 16.0001C26.6665 10.1067 21.8932 5.33341 15.9998 5.33341C10.1065 5.33341 5.33317 10.1067 5.33317 16.0001Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconErrorOutline32;

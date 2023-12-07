import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconWIFI24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.50001L3 11.5C7.97 6.53001 16.03 6.53001 21 11.5L23 9.50001C16.93 3.43001 7.08 3.43001 1 9.50001ZM9 17.5L12 20.5L15 17.5C13.35 15.84 10.66 15.84 9 17.5ZM7 15.5L5 13.5C8.87 9.64001 15.14 9.64001 19 13.5L17 15.5C14.24 12.74 9.76 12.74 7 15.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWIFI24;

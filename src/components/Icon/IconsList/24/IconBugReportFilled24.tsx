import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBugReportFilled24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M21.5556 7.11111H18.1211C17.5711 6.15778 16.8133 5.33889 15.8967 4.71556L17.8889 2.72333L16.1656 1L13.5133 3.65222C12.9511 3.51778 12.3767 3.44444 11.7778 3.44444C11.1789 3.44444 10.6044 3.51778 10.0544 3.65222L7.39 1L5.66667 2.72333L7.64667 4.71556C6.74222 5.33889 5.98444 6.15778 5.43444 7.11111H2V9.55556H4.55444C4.49333 9.95889 4.44444 10.3622 4.44444 10.7778V12H2V14.4444H4.44444V15.6667C4.44444 16.0822 4.49333 16.4856 4.55444 16.8889H2V19.3333H5.43444C6.70556 21.5211 9.06444 23 11.7778 23C14.4911 23 16.85 21.5211 18.1211 19.3333H21.5556V16.8889H19.0011C19.0622 16.4856 19.1111 16.0822 19.1111 15.6667V14.4444H21.5556V12H19.1111V10.7778C19.1111 10.3622 19.0622 9.95889 19.0011 9.55556H21.5556V7.11111ZM14.2222 16.8889H9.33333V14.4444H14.2222V16.8889ZM14.2222 12H9.33333V9.55556H14.2222V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBugReportFilled24;

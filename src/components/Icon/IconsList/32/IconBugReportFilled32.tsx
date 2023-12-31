import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBugReportFilled32: FC<IIconsProps> = ({
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
        d="M28.8889 9.77778H24.5178C23.8178 8.56444 22.8533 7.52222 21.6867 6.72889L24.2222 4.19333L22.0289 2L18.6533 5.37556C17.9378 5.20444 17.2067 5.11111 16.4444 5.11111C15.6822 5.11111 14.9511 5.20444 14.2511 5.37556L10.86 2L8.66667 4.19333L11.1867 6.72889C10.0356 7.52222 9.07111 8.56444 8.37111 9.77778H4V12.8889H7.25111C7.17333 13.4022 7.11111 13.9156 7.11111 14.4444V16H4V19.1111H7.11111V20.6667C7.11111 21.1956 7.17333 21.7089 7.25111 22.2222H4V25.3333H8.37111C9.98889 28.1178 12.9911 30 16.4444 30C19.8978 30 22.9 28.1178 24.5178 25.3333H28.8889V22.2222H25.6378C25.7156 21.7089 25.7778 21.1956 25.7778 20.6667V19.1111H28.8889V16H25.7778V14.4444C25.7778 13.9156 25.7156 13.4022 25.6378 12.8889H28.8889V9.77778ZM19.5556 22.2222H13.3333V19.1111H19.5556V22.2222ZM19.5556 16H13.3333V12.8889H19.5556V16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBugReportFilled32;

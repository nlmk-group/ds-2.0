import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFolderMenu32: FC<IIconsProps> = ({
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
        d="M16 7.75H25.6C26.92 7.75 28 8.9875 28 10.5V24.25C28 25.7625 26.92 27 25.6 27H6.4C5.08 27 4 25.7625 4 24.25L4.012 7.75C4.012 6.2375 5.08 5 6.4 5H13.6L16 7.75ZM6.4 10.5V24.25H25.6V10.5H6.4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderMenu32;

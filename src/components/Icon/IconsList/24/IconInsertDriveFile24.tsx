import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconIsertDriveFile24: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20V8L14 2L6 2C4.9 2 4 2.9 4 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20ZM18 20H5.99L5.99 4L13 4V9H18L18 20Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIsertDriveFile24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPlayOutlined32: FC<IIconsProps> = ({
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
        d="M13 22.75L22 16L13 9.25V22.75ZM16 1C7.72 1 1 7.72 1 16C1 24.28 7.72 31 16 31C24.28 31 31 24.28 31 16C31 7.72 24.28 1 16 1ZM16 28C9.385 28 4 22.615 4 16C4 9.385 9.385 4 16 4C22.615 4 28 9.385 28 16C28 22.615 22.615 28 16 28Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPlayOutlined32;

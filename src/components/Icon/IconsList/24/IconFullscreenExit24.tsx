import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFullscreenExit24: FC<IIconsProps> = ({
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
        d="M5 8H8V5H10V10H5V8ZM8 16H5V14H10V19H8V16ZM14 19H16V16H19V14H14V19ZM16 5V8H19V10H14V5H16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenExit24;

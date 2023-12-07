import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenExitCloseOutlined24: FC<IIconsProps> = ({
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
        d="M3 8H8V3H10V10H3V8ZM8 16H3V13.8571H10.1429V21H8V16ZM14 21H16V16H21V13.8571H14V21ZM16 3V8H21V10.1429H14V3H16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenExitCloseOutlined24;

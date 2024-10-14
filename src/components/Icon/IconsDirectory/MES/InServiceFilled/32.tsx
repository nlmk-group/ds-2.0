import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInServiceFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26.667 12.61v15.057A1.667 1.667 0 0 1 25 29.333h-.667a1.667 1.667 0 0 1-1.666-1.666V12.61a5.333 5.333 0 0 1 0-9.888V8l2.002 1 1.998-1V2.723a5.333 5.333 0 0 1 0 9.888Zm-9.498-2.15A5.58 5.58 0 0 0 16 10.334a5.666 5.666 0 1 0 4 9.678v5.512c-.514.218-1.046.394-1.59.525L18 29.333h-4l-.411-3.288a10.276 10.276 0 0 1-2.98-1.229l-2.712 2.11-2.829-2.829 2.113-2.716a10.276 10.276 0 0 1-1.229-2.97l-3.285-.41v-4l3.285-.412a10.265 10.265 0 0 1 1.232-2.966l-2.117-2.72 2.829-2.83 2.72 2.116a10.29 10.29 0 0 1 2.973-1.237L14 2.667h4l.061.487a8.006 8.006 0 0 0-.892 7.308v-.001Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInServiceFilled32;

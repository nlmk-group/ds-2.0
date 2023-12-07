import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconMarkUnreadMailboxOutlined32: FC<IIconsProps> = ({
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
        d="M24.6364 10.5455H13.7273V12.7273H24.6364V25.8182H7.18182V12.7273H9.36364V17.0909H11.5455V8.36364H18.0909V4H9.36364V10.5455H7.18182C5.98182 10.5455 5 11.5273 5 12.7273V25.8182C5 27.0182 5.98182 28 7.18182 28H24.6364C25.8364 28 26.8182 27.0182 26.8182 25.8182V12.7273C26.8182 11.5273 25.8364 10.5455 24.6364 10.5455Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined32;

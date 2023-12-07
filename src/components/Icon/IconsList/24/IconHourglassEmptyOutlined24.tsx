import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHourglassEmptyOutlined24: FC<IIconsProps> = ({
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
        d="M7 3V8.4H7.009L7 8.409L10.6 12L7 15.6L7.009 15.609H7V21H17.8V15.609H17.791L17.8 15.6L14.2 12L17.8 8.409L17.791 8.4H17.8V3H7ZM16 16.05V19.2H8.8V16.05L12.4 12.45L16 16.05ZM12.4 11.55L8.8 7.95V4.8H16V7.95L12.4 11.55Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHourglassEmptyOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHelperMailOutlined32: FC<IIconsProps> = ({
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
        d="M3 9C3 7.89543 3.89543 7 5 7H27C28.1046 7 29 7.89543 29 9V23C29 24.1046 28.1046 25 27 25H5C3.89543 25 3 24.1046 3 23V9ZM25 9H7.00003L16 15.75L25 9ZM5 9.99998L5 23H27V10L16.6 17.8C16.2445 18.0667 15.7556 18.0667 15.4 17.8L5 9.99998Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelperMailOutlined32;

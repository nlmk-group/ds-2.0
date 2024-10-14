import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMessage24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 11.5C3 7.5 6.87 4 12 4s9 3.5 9 7.5-3.87 7.5-9 7.5c-1.33 0-2.59-.24-3.72-.67l-.43-.16-.41.23-2.77 1.54.76-2.55.17-.58-.44-.42c-1.37-1.33-2.17-3.04-2.17-4.88L3 11.5ZM12 2C6.08 2 1 6.11 1 11.5c0 2.23.89 4.27 2.35 5.87l-.6 1.99c-.52 1.72 1.32 3.19 2.89 2.32l2.38-1.32c1.24.42 2.58.64 3.99.64 5.92 0 11-4.11 11-9.5S17.92 2 12 2ZM7 13c.83 0 1.5-.67 1.5-1.5S7.83 10 7 10s-1.5.67-1.5 1.5S6.17 13 7 13Zm6.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5ZM17 13c.83 0 1.5-.67 1.5-1.5S17.83 10 17 10s-1.5.67-1.5 1.5.67 1.5 1.5 1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMessage24;

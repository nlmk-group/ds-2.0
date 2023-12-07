import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAutorenew24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12 9V6C8.69 6 6 8.69 6 12C6 13.01 6.25 13.97 6.7 14.8L5.24 16.26C4.46 15.03 4 13.57 4 12C4 7.58 7.58 4 12 4V1L16 5L12 9ZM17.3 9.2L18.76 7.74C19.54 8.97 20 10.43 20 12C20 16.42 16.42 20 12 20V23L8 19L12 15V18C15.31 18 18 15.31 18 12C18 10.99 17.74 10.04 17.3 9.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAutorenew24;

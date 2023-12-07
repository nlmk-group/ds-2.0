import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChat24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.5C2.9 2.5 2.01 3.4 2.01 4.5L2 22.5L6 18.5H20C21.1 18.5 22 17.6 22 16.5V4.5C22 3.4 21.1 2.5 20 2.5H4ZM4 4.5H20V16.5H5.17L4 17.67V4.5ZM14 12.5H6V14.5H14V12.5ZM6 9.5H18V11.5H6V9.5ZM18 6.5H6V8.5H18V6.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChat24;

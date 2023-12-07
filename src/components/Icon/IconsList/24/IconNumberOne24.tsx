import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconNumberOne24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.07715 12C2.07715 6.48 6.54715 2 12.0671 2C17.5971 2 22.0771 6.48 22.0771 12C22.0771 17.52 17.5971 22 12.0671 22C6.54715 22 2.07715 17.52 2.07715 12ZM4.07715 12C4.07715 16.42 7.65715 20 12.0771 20C16.4971 20 20.0771 16.42 20.0771 12C20.0771 7.58 16.4971 4 12.0771 4C7.65715 4 4.07715 7.58 4.07715 12Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.077 9.00118L8.62598 10.6512V8.39767L11.077 6.74861V9.00118ZM11.0781 16.998H8.32715V15.348H11.0781V6.75H13.0281V15.348H15.7671V16.998H13.0281H11.0781Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNumberOne24;

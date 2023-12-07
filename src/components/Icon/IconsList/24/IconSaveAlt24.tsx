import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSaveAlt24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M15.59 10.09L13 12.67V3H11V12.67L8.41 10.09L7 11.5L12 16.5L17 11.5L15.59 10.09ZM19 19V12H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V12H5V19H19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSaveAlt24;

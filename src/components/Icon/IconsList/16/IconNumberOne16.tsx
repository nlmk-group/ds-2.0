import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconNumberOne16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.333 8c0-3.68 2.98-6.667 6.66-6.667A6.67 6.67 0 0 1 14.668 8a6.67 6.67 0 0 1-6.673 6.667A6.663 6.663 0 0 1 1.333 8Zm1.334 0A5.332 5.332 0 0 0 8 13.332a5.332 5.332 0 0 0 5.334-5.334A5.332 5.332 0 0 0 8 2.666a5.332 5.332 0 0 0-5.333 5.333Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.333 6 5.7 7.1V5.599L7.333 4.5v1.502Zm.001 5.332H5.5v-1.1h1.834V4.5h1.3v5.732h1.826v1.1H7.334Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNumberOne16;

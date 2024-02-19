import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBasketBuying16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth=".5"
        d="M13.932 5.158a.375.375 0 0 0-.306-.16H5.627l-.605-2.087C4.784 2.089 4.22 2 3.989 2H2.374a.374.374 0 1 0 0 .748h1.614c.052 0 .207 0 .314.368l2.083 7.655a.374.374 0 0 0 .36.273h5.087a.374.374 0 0 0 .353-.248L13.978 5.5a.375.375 0 0 0-.046-.342Zm-2.363 5.137H7.03L5.838 5.748h7.256l-1.525 4.547Zm-.742 1.507a.942.942 0 1 0 0 1.884.942.942 0 0 0 0-1.884Zm-3.392 0a.942.942 0 1 0 0 1.884.942.942 0 0 0 0-1.884Z"
      />
    </svg>
  );
};

export default IconBasketBuying16;

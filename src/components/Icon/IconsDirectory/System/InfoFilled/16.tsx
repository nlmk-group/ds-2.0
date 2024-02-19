import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInfoFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 8c0-3.864 3.129-7 6.993-7A7.004 7.004 0 0 1 15 8c0 3.864-3.136 7-7.007 7A6.997 6.997 0 0 1 1 8Zm6.3-2.1h1.4V4.5H7.3v1.4Zm0 5.599h1.4v-4.2H7.3v4.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInfoFilled16;

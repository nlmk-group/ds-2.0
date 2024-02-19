import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertDriveFileOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28 27.99V10.668l-8.004-8H5.336A1.34 1.34 0 0 0 4 3.989V28.01c0 .731.593 1.323 1.324 1.323h21.352A1.334 1.334 0 0 0 28 27.991ZM18.667 12h6.666v14.666H6.667V5.334h12V12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertDriveFileOutlined32;

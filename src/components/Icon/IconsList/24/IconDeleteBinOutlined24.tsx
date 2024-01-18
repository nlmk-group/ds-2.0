import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconDeleteBinOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8ZM9 4v2h6V4H9Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 9.667v8.666h1V9.667H9Zm2.667 0v8.666h1V9.667h-1Zm2.666 0v8.666h1V9.667h-1Z"
      />
    </svg>
  );
};

export default IconDeleteBinOutlined24;

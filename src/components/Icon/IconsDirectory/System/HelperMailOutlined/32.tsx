import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelperMailOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 9a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm22 0H7l9 6.75L25 9ZM5 10v13h22V10l-10.4 7.8a1 1 0 0 1-1.2 0L5 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelperMailOutlined32;

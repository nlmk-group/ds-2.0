import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDvrOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M3 3h18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-5v2H8v-2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm0 14h18V5H3v12Zm16-9H8v2h11V8ZM8 12h11v2H8v-2ZM7 8H5v2h2V8Zm-2 4h2v2H5v-2Z"
      />
    </svg>
  );
};

export default IconDvrOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHomeOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8 3.152 4 3.6V13h-1.6V8.2H5.6V13H4V6.752l4-3.6ZM8 1 0 8.2h2.4v6.4h4.8V9.8h1.6v4.8h4.8V8.2H16L8 1Z"
      />
    </svg>
  );
};

export default IconHomeOutlined16;

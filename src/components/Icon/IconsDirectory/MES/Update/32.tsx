import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUpdate32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M28 13.493h-9.04l3.654-3.76C18.974 6.133 13.08 6 9.44 9.6a9.167 9.167 0 0 0 0 13.053c3.64 3.614 9.534 3.614 13.174 0 1.813-1.786 2.72-3.88 2.72-6.52H28c0 2.64-1.173 6.067-3.52 8.387-4.68 4.64-12.28 4.64-16.96 0-4.666-4.627-4.706-12.147-.026-16.773a11.983 11.983 0 0 1 16.866 0L28 4v9.493Zm-11.333-2.826v5.666l4.667 2.774-.96 1.613-5.707-3.387v-6.666h2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUpdate32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.867 5.333h-8.4c-1.54 0-2.786 1.238-2.786 2.75l-.014 16.5c0 1.513 1.26 2.75 2.8 2.75h22.4c1.54 0 2.8-1.237 2.8-2.75v-13.75c0-1.512-1.26-2.75-2.8-2.75h-11.2l-2.8-2.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderFilled32;

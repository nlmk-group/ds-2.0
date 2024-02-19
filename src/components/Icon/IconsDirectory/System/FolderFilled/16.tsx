import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6.933 2.667h-4.2c-.77 0-1.393.618-1.393 1.375l-.007 8.25c0 .756.63 1.375 1.4 1.375h11.2c.77 0 1.4-.62 1.4-1.375V5.417c0-.757-.63-1.375-1.4-1.375h-5.6l-1.4-1.375Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderFilled16;

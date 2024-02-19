import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.333 4.042h5.6c.77 0 1.4.618 1.4 1.375v6.875c0 .756-.63 1.375-1.4 1.375h-11.2c-.77 0-1.4-.62-1.4-1.375l.007-8.25c0-.757.623-1.375 1.393-1.375h4.2l1.4 1.375Zm-5.6 8.25h11.2V5.417h-11.2v6.875Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderOutlined16;

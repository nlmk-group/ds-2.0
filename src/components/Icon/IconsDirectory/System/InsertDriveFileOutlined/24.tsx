import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertDriveFileOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21 20.993V8l-6.003-6H4.002C3.449 2 3 2.455 3 2.992v18.016c0 .548.445.992.993.992h16.014A1 1 0 0 0 21 20.993ZM14 9h5v11H5V4h9v5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertDriveFileOutlined24;

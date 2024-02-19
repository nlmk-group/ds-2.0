import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockCloseOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6 8v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-2V8A6 6 0 0 0 6 8ZM5 21V11h14v10H5Zm6-4.268a2 2 0 1 1 2 0V19h-2v-2.268ZM16 8v1H8V8a4 4 0 1 1 8 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLockCloseOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 6.09V4.183C5.931 4.182 4.25 5.894 4.25 8c0 .643.156 1.254.438 1.782l-.913.929A5.114 5.114 0 0 1 3 8c0-2.813 2.237-5.09 5-5.09V1l2.5 2.545L8 6.091Zm3.313.128.912-.929A5.11 5.11 0 0 1 13 8c0 2.813-2.238 5.09-5 5.09V15l-2.5-2.546L8 9.91v1.91c2.069 0 3.75-1.713 3.75-3.819 0-.643-.162-1.247-.438-1.782Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAutoRenewReloadOutlined16;

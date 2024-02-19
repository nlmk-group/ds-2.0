import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1 5.927 1.273 1.286a8.041 8.041 0 0 1 11.454 0L15 5.927a9.833 9.833 0 0 0-14 0Zm5.09 5.144L8 13l1.91-1.929a2.677 2.677 0 0 0-3.82 0ZM4.819 9.785 3.545 8.5a6.26 6.26 0 0 1 8.91 0l-1.273 1.286a4.469 4.469 0 0 0-6.364 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiOutlined16;

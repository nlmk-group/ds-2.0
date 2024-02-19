import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMarkUnreadMailboxOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.727 7.91h-8.181v1.635h8.181v9.819H5.637V9.545h1.636v3.273h1.636V6.273h4.91V3H7.272v4.91H5.636C4.736 7.91 4 8.644 4 9.544v9.819c0 .9.736 1.636 1.636 1.636h13.091c.9 0 1.637-.736 1.637-1.636V9.545c0-.9-.737-1.636-1.637-1.636Z"
      />
    </svg>
  );
};

export default IconMarkUnreadMailboxOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDownloadOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M26.333 16a1 1 0 0 0-1 1v7.333a1 1 0 0 1-1 1H7.667a1 1 0 0 1-1-1V17a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8.333C4 26.8 5.2 28 6.667 28h18.666C26.8 28 28 26.8 28 25.333V17a1 1 0 0 0-1-1h-.667Zm-9 .893 2.747-2.735a1 1 0 0 1 1.412.001l.468.467a1 1 0 0 1 0 1.414l-5.253 5.253a1 1 0 0 1-1.414 0L10.04 16.04a1 1 0 0 1 0-1.414l.468-.467a1 1 0 0 1 1.412-.001l2.747 2.735V5a1 1 0 0 1 1-1h.666a1 1 0 0 1 1 1v11.893Z"
      />
    </svg>
  );
};

export default IconDownloadOutlined32;

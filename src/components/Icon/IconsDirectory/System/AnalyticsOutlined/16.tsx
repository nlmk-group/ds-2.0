import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm4.763-5.4A4.8 4.8 0 1 1 7.4 3.237V8.6h5.363Zm0-1.2H8.6V3.237A4.803 4.803 0 0 1 12.763 7.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalyticsOutlined16;

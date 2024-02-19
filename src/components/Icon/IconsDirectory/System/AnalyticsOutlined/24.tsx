import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm7.144-8.1A7.201 7.201 0 1 1 11.1 4.856V12.9h8.044Zm0-1.8H12.9V4.856a7.204 7.204 0 0 1 6.244 6.244Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalyticsOutlined24;

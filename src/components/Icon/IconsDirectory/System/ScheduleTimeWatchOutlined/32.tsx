import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconScheduleTimeWatchOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M15.986 2C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2ZM16 27.2C9.812 27.2 4.8 22.188 4.8 16S9.812 4.8 16 4.8 27.2 9.812 27.2 16 22.188 27.2 16 27.2ZM14.6 9h2.1v7.35l6.3 3.738-1.05 1.722-7.35-4.41V9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconScheduleTimeWatchOutlined32;

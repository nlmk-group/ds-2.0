import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5 8.207 11.286 2l6.285 6.207h-4.714V19.11H9.714V8.207H5Zm17.286 4.682v10.904H27L20.714 30l-6.285-6.207h4.714V12.89h3.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertOutlined32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#clip0_521_25812)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M13.6 12.3866L12.3877 13.5989L7.8 9.01181L3.21287 13.5989L2.00053 12.3866L6.58766 7.79947L2 3.21234L3.21234 2L7.8 6.58713L12.3871 2L13.5995 3.21234L9.01234 7.79947L13.6 12.3866Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_521_25812">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCloseOutlined16;

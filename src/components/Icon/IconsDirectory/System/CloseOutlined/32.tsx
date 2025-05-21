import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#clip0_521_25818)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M26.9966 24.6968L24.6973 26.996L15.9966 18.2963L7.29685 26.996L4.99758 24.6968L13.6973 15.997L4.99658 7.29732L7.29585 4.99805L15.9966 13.6978L24.6963 4.99805L26.9956 7.29732L18.2958 15.997L26.9966 24.6968Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_521_25818">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCloseOutlined32;

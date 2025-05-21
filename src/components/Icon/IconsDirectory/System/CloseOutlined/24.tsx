import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#clip0_521_25815)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M20.6 18.759L18.7606 20.5984L11.8 13.6386L4.84021 20.5984L3.0008 18.759L9.96059 11.7992L3 4.83941L4.83941 3L11.8 9.95979L18.7598 3L20.5992 4.83941L13.6394 11.7992L20.6 18.759Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_521_25815">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCloseOutlined24;

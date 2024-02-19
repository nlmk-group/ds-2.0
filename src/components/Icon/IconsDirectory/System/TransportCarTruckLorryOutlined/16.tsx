import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTruckLorryOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.977 12a2.333 2.333 0 0 1-4.62 0h-.69V4a.667.667 0 0 1 .666-.667h9.334a.667.667 0 0 1 .666.667v1.333h2l2 2.704V12h-1.356a2.333 2.333 0 0 1-4.62 0h-3.38ZM10 4.667H2v5.367a2.333 2.333 0 0 1 3.775.633h3.783c.112-.236.262-.45.442-.633V4.667Zm1.333 4H14v-.19l-1.339-1.81h-1.328v2Zm.334 4a1 1 0 1 0 0-2.001 1 1 0 0 0 0 2Zm-7-1a1 1 0 1 0-2.001 0 1 1 0 0 0 2 0Z"
      />
    </svg>
  );
};

export default IconTransportCarTruckLorryOutlined16;

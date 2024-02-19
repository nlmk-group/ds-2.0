import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTruckLorryOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.953 23a4.667 4.667 0 0 1-9.24 0h-1.38V7a1.333 1.333 0 0 1 1.334-1.333h18.666A1.333 1.333 0 0 1 22.667 7v2.666h4l4 5.409V23h-2.714a4.667 4.667 0 0 1-9.24 0h-6.76ZM20 8.333H4v10.734a4.666 4.666 0 0 1 7.55 1.266h7.566A4.71 4.71 0 0 1 20 19.067V8.333Zm2.667 8H28v-.38l-2.677-3.62h-2.656v4Zm.666 8a2 2 0 1 0 0-4.001 2 2 0 0 0 0 4.001Zm-14-2a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
    </svg>
  );
};

export default IconTransportCarTruckLorryOutlined32;

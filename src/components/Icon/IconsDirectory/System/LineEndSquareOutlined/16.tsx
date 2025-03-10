import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLineEndSquareOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.7 10.546h4.9V5.455H8.7v5.09ZM7.3 12V8.727H1V7.273h6.3V4H15v8H7.3Z"
      />
    </svg>
  );
};

export default IconLineEndSquareOutlined16;

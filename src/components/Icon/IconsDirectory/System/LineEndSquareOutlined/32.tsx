import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLineEndSquareOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.4 20.773h9.8v-9.546h-9.8v9.546ZM14.6 23.5v-6.136H2v-2.728h12.6V8.5H30v15H14.6Z"
      />
    </svg>
  );
};

export default IconLineEndSquareOutlined32;

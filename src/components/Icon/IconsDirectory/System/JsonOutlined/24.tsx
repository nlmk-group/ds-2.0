import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJsonOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
        d="M9 4H7.8a3 3 0 0 0-3 3v2.2A2.8 2.8 0 0 1 2 12m13-8h1.2a3 3 0 0 1 3 3v2.2A2.8 2.8 0 0 0 22 12M9 20H7.8a3 3 0 0 1-3-3v-2.2A2.8 2.8 0 0 0 2 12m13 8h1.2a3 3 0 0 0 3-3v-2.2A2.8 2.8 0 0 1 22 12"
      />
    </svg>
  );
};

export default IconJsonOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconJsonOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.2 4.9A4.1 4.1 0 0 0 5.1 9v4a1.9 1.9 0 0 1-1.9 1.9H3v2.2h.2c1.05 0 1.9.85 1.9 1.9v4a4.1 4.1 0 0 0 4.1 4.1H11v-2.2H9.2A1.9 1.9 0 0 1 7.3 23v-4a4.089 4.089 0 0 0-1.305-3A4.089 4.089 0 0 0 7.3 13V9c0-1.05.85-1.9 1.9-1.9H11V4.9H9.2Zm13.2 0A4.1 4.1 0 0 1 26.5 9v4c0 1.05.85 1.9 1.9 1.9h.6v2.2h-.6a1.9 1.9 0 0 0-1.9 1.9v4a4.1 4.1 0 0 1-4.1 4.1H20v-2.2h2.4a1.9 1.9 0 0 0 1.9-1.9v-4c0-1.184.502-2.252 1.305-3a4.089 4.089 0 0 1-1.305-3V9a1.9 1.9 0 0 0-1.9-1.9H20V4.9h2.4Z"
      />
    </svg>
  );
};

export default IconJsonOutlined32;

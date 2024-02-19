import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3 3h18a2 2 0 0 1 2 2.002v14.016A1.99 1.99 0 0 1 21 21H3c-1.1 0-2-.881-2-1.982v-4.015h2v4.025h18V4.982H3v4.015H1V5.002C1 3.901 1.9 3 3 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m15 12-4 4.004v-3.003H1V11h10V7.996L15 12Z" />
    </svg>
  );
};

export default IconInputOutlined24;

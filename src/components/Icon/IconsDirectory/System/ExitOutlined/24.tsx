import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6 3h8c1.1 0 2 .901 2 2.002v3.995h-2V4.982H6v14.046h8v-4.025h2v4.015A1.99 1.99 0 0 1 14 21H6c-1.1 0-2-.881-2-1.982V5.002A2 2 0 0 1 6 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M18 16.005 22 12l-4-4.004v3.003h-8V13h8v3.004Z" />
    </svg>
  );
};

export default IconExitOutlined24;

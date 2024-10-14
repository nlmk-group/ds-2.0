import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabTrack32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.2 15a1.2 1.2 0 0 0 0 2.4h25.462a1.2 1.2 0 1 0 0-2.4H3.2Zm4.325 5.938a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0Zm0 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm16.8 0a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M24.325 20.938a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0ZM8 11V9h16v2H8Zm0 3v-2h16v2H8Z"
      />
    </svg>
  );
};

export default IconSlabTrack32;

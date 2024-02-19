import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.545 3h11.91A2.56 2.56 0 0 1 21 5.558V12h-2.546V5.533H6.545V26.48h11.91V20H21v6.467A2.538 2.538 0 0 1 18.454 29H6.545A2.538 2.538 0 0 1 4 26.467V5.558A2.551 2.551 0 0 1 6.545 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M23.91 21.117 29 16l-5.09-5.117v3.838H12.181v2.558h11.727v3.838Z" />
    </svg>
  );
};

export default IconExitOutlined32;

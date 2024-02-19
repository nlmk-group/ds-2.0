import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExitFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.454 3H6.545A2.551 2.551 0 0 0 4 5.558v20.91A2.538 2.538 0 0 0 6.545 29h11.91c1.4 0 2.545-1.126 2.545-2.533V20H10v-8h11V5.558A2.56 2.56 0 0 0 18.454 3Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m29 16-5.09 5.117v-3.838H12.181v-2.558h11.727v-3.838L29 16Z" />
    </svg>
  );
};

export default IconExitFilled32;

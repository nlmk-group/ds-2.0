import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6v5.024a.976.976 0 0 1-.976.976H11.79v-3.162a.5.5 0 0 0-.5-.5h-1.22V7.864a.5.5 0 0 0-.5-.5H6.39a.5.5 0 0 0-.5.5v2.474H4.67a.5.5 0 0 0-.5.5V14H2.975A.976.976 0 0 1 2 13.024V8Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M5.169 14h2.31v-2.662h-.59v.211a.5.5 0 1 1-1 0v-.21h-.72V14Zm3.31 0h2.31v-2.662h-.72v.211a.5.5 0 1 1-1 0v-.21h-.59V14Zm.591-3.662V8.364h-.591v.25a.5.5 0 0 1-1 0v-.25h-.59v1.974h2.18Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerFilled16;

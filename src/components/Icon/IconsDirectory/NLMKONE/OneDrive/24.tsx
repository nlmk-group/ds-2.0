import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOneDrive24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M19 7c-.74-2.5-3-5-6.5-5S7 4 5.91 5.53C3.15 5.82 1 8.04 1 10.75c0 2.04 1.22 3.8 3 4.67v-2.63c-.53-.56-.85-1.28-.85-2.04 0-1.51 1.22-2.89 2.98-3.07l.67-.07c.08.01.16.02.24.02 1.29-.05 2.52.74 2.96 1.79a1.077 1.077 0 1 0 1.99-.83c-.6-1.42-1.89-2.48-3.38-2.91.88-.84 2.11-1.52 3.89-1.52 2.32 0 3.9 1.63 4.43 3.46l.42 1.44 1.5.1c1.02.07 1.99 1.05 1.99 2.48 0 .63-.32 1.25-.85 1.67v2.42c1.75-.62 3-2.21 3-4.09 0-2.31-1.62-4.47-4-4.62L19 7Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M9 18.36V13H7v5.36l-1.36-1.13-1.28 1.54 3 2.5c.37.31.91.31 1.28 0l3-2.5-1.28-1.54L9 18.36Zm2.29-3.07 3-3h-.01a.996.996 0 0 1 1.41 0l3 3-1.41 1.41-1.29-1.29V21h-2v-5.59L12.7 16.7l-1.41-1.41Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOneDrive24;

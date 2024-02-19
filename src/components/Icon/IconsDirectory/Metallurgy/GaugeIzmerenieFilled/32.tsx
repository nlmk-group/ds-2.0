import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenieFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.85 2.556v2.028c2.102.161 4.038.912 5.644 2.088l1.377-1.376 1.202 1.202-1.286 1.285A10.965 10.965 0 0 1 27 15.553c0 5.788-4.472 10.533-10.15 10.967v3.98h-1.7v-3.98C9.472 26.086 5 21.34 5 15.552S9.472 5.018 15.15 4.584V2.556h1.7Zm.211 15.258a2.5 2.5 0 0 1-3.325-3.325l-3.92-3.919 1.203-1.202 3.918 3.918a2.5 2.5 0 0 1 3.326 3.326l.783.783-1.202 1.203-.783-.784Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenieFilled32;

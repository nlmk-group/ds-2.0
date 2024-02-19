import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.48 10.6C16.673 8.99 14.327 8 11.737 8 7.191 8 3.35 11.03 2 15.22l2.307.78c1.026-3.19 3.959-5.5 7.43-5.5 1.905 0 3.645.72 5.004 1.88L13.202 16H22V7l-3.52 3.6Z"
      />
    </svg>
  );
};

export default IconRedoArrowFilled24;

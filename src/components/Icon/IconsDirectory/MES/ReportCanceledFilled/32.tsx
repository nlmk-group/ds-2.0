import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCanceledFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.087a2.497 2.497 0 0 1 2.163-1.25h1.25c0-.829 1.12-1.5 2.5-1.5s2.5.671 2.5 1.5h1.25A2.497 2.497 0 0 1 21.913 4H26a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2ZM11.5 6c.375.875 1.005 2 2.25 2h4.5c1.271 0 1.881-1.116 2.25-2h-9Zm10.377 8.891-1.768-1.768L16 17.233l-4.109-4.11-1.768 1.768L14.233 19l-4.11 4.109 1.768 1.767L16 20.768l4.109 4.108 1.767-1.767L17.768 19l4.108-4.109Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCanceledFilled32;

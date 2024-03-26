import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalculator24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17 4.96H7v2h10v-2Zm-10 4h2v2H7v-2Zm2 4H7v2h2v-2Zm-2 4h2v2H7v-2Zm6-8h-2v2h2v-2Zm-2 4h2v2h-2v-2Zm2 4h-2v2h2v-2Zm2-8h2v2h-2v-2Zm2 4h-2v6h2v-6Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 1.92c0-.54.42-.96.9-.96l16.2.02c.9.06.9.9.9.9v20.16c0 .53-.5.92-.92.92H3.92c-.5 0-.92-.41-.92-.94V1.92Zm2 1.04h14v18H5v-18Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M17 4.96H7v2h10v-2Zm-10 4h2v2H7v-2Zm2 4H7v2h2v-2Zm-2 4h2v2H7v-2Zm6-8h-2v2h2v-2Zm-2 4h2v2h-2v-2Zm2 4h-2v2h2v-2Zm2-8h2v2h-2v-2Zm2 4h-2v6h2v-6Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 1.92c0-.54.42-.96.9-.96l16.2.02c.9.06.9.9.9.9v20.16c0 .53-.5.92-.92.92H3.92c-.5 0-.92-.41-.92-.94V1.92Zm2 1.04h14v18H5v-18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalculator24;

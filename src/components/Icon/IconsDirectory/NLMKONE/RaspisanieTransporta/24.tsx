import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRaspisanieTransporta24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15 4h-3v5.07A8.04 8.04 0 0 0 9.07 12H4v4h4c0 .69.088 1.36.252 2H6.5a1.5 1.5 0 0 1-3 0v-.063A2 2 0 0 1 2 16v-5.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1V7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2.07a7.951 7.951 0 0 0-2-.818V7a3 3 0 0 0-3-3Zm-5 0H7a3 3 0 0 0-3 3v3h6V4ZM7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-9a1 1 0 0 1 1 1v1.5h1a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRaspisanieTransporta24;

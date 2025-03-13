import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotesOffOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.34.93.93 2.34l2.01 2.01-.01 16.99 4-4h9l5.73 5.73 1.41-1.41L2.34.93Zm18.59 14.41v-12H7.59l-2-2h15.34c1.1 0 2 .9 2 2v12c0 .9-.61 1.66-1.43 1.91l-1.91-1.91h1.34Zm-12-4h-2v2h2v-2Zm10-3h-6.34l2 2h4.34v-2Zm-8-3h8v2h-7.34l-.66-.66V5.34Zm-6 11.17 1.17-1.17h7.83l-5-5h-2v-2l-2-2v10.17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconNotesOffOutlined24;

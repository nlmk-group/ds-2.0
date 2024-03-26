import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalculator32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.667 6.614H9.333V9.28h13.334V6.614ZM9.333 11.947H12v2.667H9.333v-2.667ZM12 17.28H9.333v2.667H12V17.28Zm-2.667 5.334H12v2.666H9.333v-2.666Zm8-10.667h-2.666v2.667h2.666v-2.667Zm-2.666 5.333h2.666v2.667h-2.666V17.28Zm2.666 5.334h-2.666v2.666h2.666v-2.666ZM20 11.947h2.667v2.667H20v-2.667Zm2.667 5.333H20v8h2.667v-8Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 2.56c0-.72.56-1.28 1.2-1.28l21.6.027c1.2.08 1.2 1.2 1.2 1.2v26.88c0 .707-.667 1.227-1.227 1.227H5.227A1.238 1.238 0 0 1 4 29.36V2.56Zm2.667 1.387h18.666v24H6.667v-24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalculator32;

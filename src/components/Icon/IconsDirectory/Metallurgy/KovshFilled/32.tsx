import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13 18.561a3.003 3.003 0 0 0 2.728 2.927 3 3 0 1 0-.578-5.865V3.566h1.7v2.15H28v1.7h-2.15V25.51A3.85 3.85 0 0 1 22 29.36H10a3.85 3.85 0 0 1-3.85-3.85V7.416H4v-1.7h6v1.7H7.85v11.15l5.15-.005Zm3.85-4.683V7.416h7.3v11.15H20.7a4.698 4.698 0 0 0-3.85-4.688Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKovshFilled32;

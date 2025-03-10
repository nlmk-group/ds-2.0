import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsOverlySecured16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || '#F76979'} d="M1.333 4.667h13v8h-13v-8Z" />
      <path fill={htmlColor || '#F76979'} d="M2.633 2h10.4v11.333h-10.4V2Z" />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M2.633 7.333v5.334h10.4V7.333h1.3v5.334c0 .736-.582 1.333-1.3 1.333h-10.4c-.718 0-1.3-.597-1.3-1.333V7.333h1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsOverlySecured16;

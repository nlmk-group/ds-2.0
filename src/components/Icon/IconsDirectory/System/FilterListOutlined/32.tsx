import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterListOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6v3.333h30V6H1Zm11.667 20h6.666v-3.333h-6.666V26ZM26 17.667H6v-3.334h20v3.334Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterListOutlined32;

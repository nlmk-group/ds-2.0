import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArticleFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.333 1h23.334C29.5 1 31 2.5 31 4.333v23.334C31 29.5 29.5 31 27.667 31H4.333A3.343 3.343 0 0 1 1 27.667V4.333C1 2.5 2.5 1 4.333 1Zm3.334 23.333h11.666V21H7.667v3.333Zm0-6.666h16.666v-3.334H7.667v3.334Zm0-6.667h16.666V7.667H7.667V11Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArticleFilled32;

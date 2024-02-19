import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDvrFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M13.727 2H2.273C1.573 2 1 2.6 1 3.333v8c0 .734.573 1.334 1.273 1.334h3.182V14h5.09v-1.333h3.182c.7 0 1.273-.6 1.273-1.334v-8C15 2.6 14.427 2 13.727 2Zm-1.273 3.333h-7v1.334h7V5.333ZM5.454 8h7v1.333h-7V8Zm-.636-2.667H3.545v1.334h1.273V5.333ZM3.545 8h1.273v1.333H3.545V8Z"
      />
    </svg>
  );
};

export default IconDvrFilled16;

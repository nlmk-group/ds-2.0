import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconConnection32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M24 14.667h-4.24C19.2 13.12 17.734 12 16 12c-1.733 0-3.2 1.12-3.76 2.667H8c-.44 0-2.666-.134-2.666-2.667v-1.333C5.334 8.227 7.387 8 8 8h13.574c.56 1.547 2.026 2.667 3.76 2.667a4 4 0 0 0 0-8c-1.734 0-3.2 1.12-3.76 2.666H8c-2.146 0-5.333 1.414-5.333 5.334V12c0 3.92 3.187 5.333 5.333 5.333h4.24C12.8 18.88 14.267 20 16 20c1.734 0 3.2-1.12 3.76-2.667H24c.44 0 2.667.134 2.667 2.667v1.333C26.667 23.773 24.614 24 24 24H10.427c-.56-1.547-2.027-2.667-3.76-2.667a4 4 0 1 0 0 8c1.733 0 3.2-1.12 3.76-2.666H24c2.147 0 5.334-1.427 5.334-5.334V20c0-3.907-3.187-5.333-5.334-5.333Zm1.334-9.334a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667ZM6.667 26.667a1.334 1.334 0 1 1 0-2.667 1.334 1.334 0 0 1 0 2.667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconConnection32;

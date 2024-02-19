import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterSortFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M31.5 5.5H.5v4.333h31V5.5Zm-10 8.333H.5v4.334h21v-4.334Zm-10 8.334H.5V26.5h11v-4.333Z"
      />
    </svg>
  );
};

export default IconFilterSortFilled32;

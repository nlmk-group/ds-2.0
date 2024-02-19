import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterListFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.5 3.5h-13v2.333h13V3.5Zm-2 3.333h-9v2.334h9V6.833Zm-2.667 3.334H6.167V12.5h3.666v-2.333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterListFilled16;

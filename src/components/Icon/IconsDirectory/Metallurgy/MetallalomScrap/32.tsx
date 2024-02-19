import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrap32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.15 5.85H12v-1.7h8v1.7h-3.15v4.304l5.502.004 5.85 5.841-4.6 4.602-1.203-1.202L25.797 16l-4.149-4.143-11.296-.007L6.198 16l3.392 3.392-1.202 1.202L3.793 16l5.855-5.85 5.502.004V5.85Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M30 27.832 2 27.85v-1.7l3.65-.002 7.998-7.998h4.704l7.985 7.984L30 26.132v1.7Zm-6.066-1.696-15.878.01 6.296-6.296h3.296l6.286 6.286Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrap32;

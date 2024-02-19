import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMetallalomScrapFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.15 6.35H12v-1.7h8v1.7h-3.15v4.304l5.502.004 5.85 5.841-4.601 4.602-1.202-1.202 3.398-3.399-4.149-4.143-11.296-.007-4.154 4.15 3.392 3.392-1.202 1.202L3.793 16.5l5.855-5.85 5.502.004V6.35Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M30 28.332 2 28.35v-1.7l3.65-.002 7.998-7.998h4.704l7.985 7.984 3.662-.002.002 1.7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMetallalomScrapFilled32;

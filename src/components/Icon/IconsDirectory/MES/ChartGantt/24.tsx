import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartGantt24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 5h8V2h2v20h-2v-4H6v-3h4v-2H4v-3h6V8H2V5Zm12 0h3v3h-3V5Zm0 5h5v3h-5v-3Zm0 5h8v3h-8v-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartGantt24;

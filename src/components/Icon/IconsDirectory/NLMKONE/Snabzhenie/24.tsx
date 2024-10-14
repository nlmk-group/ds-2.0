import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSnabzhenie24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.96 3.326a3 3 0 0 1 2.106.002l7.286 2.736a1 1 0 0 1 .646 1.01l.002.07v9.163a2 2 0 0 1-1.298 1.873l-7.216 2.706a1.095 1.095 0 0 1-.486.066 1.096 1.096 0 0 1-.486-.066L4.298 18.18A2 2 0 0 1 3 16.307V7.144c0-.025 0-.05.002-.074a1 1 0 0 1 .648-1.007l7.31-2.737ZM6.85 7.001l4.203 1.576c.356.133.675.33.947.573.272-.244.591-.44.947-.573l4.207-1.578-4.791-1.8a1 1 0 0 0-.703 0L6.85 7.001ZM13 11.386v-.001a1 1 0 0 1 .649-.935L19 8.443v7.864l-6 2.25v-7.171Zm-2.649-.936a1 1 0 0 1 .65.935v7.172l-6-2.25V8.443l5.35 2.007Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSnabzhenie24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartGantt32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3 6.9h10.4V3H16v26h-2.6v-5.2H8.2v-3.9h5.2v-2.6H5.6v-3.9h7.8v-2.6H3V6.9Zm15.6 0h3.9v3.9h-3.9V6.9Zm0 6.5h6.5v3.9h-6.5v-3.9Zm0 6.5H29v3.9H18.6v-3.9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartGantt32;

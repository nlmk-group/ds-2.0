import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconECPPortal24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M0 9a2 2 0 0 1 2-2h4v2H2v2h2.5v2H2v2h4v2H2a2 2 0 0 1-2-2V9Zm17 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v8h-2V9h-3v8h-2V9Zm-9 6a2 2 0 0 0 2 2h3a1.99 1.99 0 0 0 1-.268V19h2v-4h-1V7h-2v8h-3V7H8v8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconECPPortal24;

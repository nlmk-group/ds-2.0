import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDevelopmentTeam24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M13.502.249a1 1 0 0 0-1.343.02l-7.757 7.24a1 1 0 0 0 .682 1.73h3.848V10.5h2V8.24a1 1 0 0 0-1-1h-2.31l5.24-4.891 5.568 4.89h-2.195a1 1 0 0 0-1 1V23h2V9.24h3.849a1 1 0 0 0 .66-1.752L13.502.248Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M9.064 16.25A2.996 2.996 0 0 0 7.084 11c-1.66 0-3 1.34-3 3 0 .9.39 1.7 1.02 2.25a4.493 4.493 0 0 0-3.02 4.25V22c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.5c0-1.97-1.26-3.64-3.02-4.25ZM7.084 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm-3 8v-.5a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v.5h-6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDevelopmentTeam24;

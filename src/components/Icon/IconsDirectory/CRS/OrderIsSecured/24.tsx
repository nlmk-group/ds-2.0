import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsSecured24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || '#43AE5A'} d="M3 10h18v9H3v-9Z" />
      <path
        fill={'#3C4A56'}
        fillRule="evenodd"
        d="M4 6v12h16V6h2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6h2Z"
        clipRule="evenodd"
      />
      <path fill={'#3C4A56'} fillRule="evenodd" d="M20 10H4V8h16v2Z" clipRule="evenodd" />
    </svg>
  );
};

export default IconOrderIsSecured24;

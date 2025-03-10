import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsNotSecured24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M4 6v12h16V6h2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6h2Z"
        clipRule="evenodd"
      />
      <path fill={'#F76979'} d="M11 6h2v7h-2V6ZM11 14h2v2h-2v-2Z" />
      <path fill={'#F76979'} fillRule="evenodd" d="M11 6v7h2V6h-2Zm0 8v2h2v-2h-2Z" clipRule="evenodd" />
    </svg>
  );
};

export default IconOrderIsNotSecured24;

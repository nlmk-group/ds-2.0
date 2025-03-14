import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsOverlySecured24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M2 7h20v12H2V7Z" />
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M4 3h16v17H4V3Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M4 11v8h16v-8h2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsOverlySecured24;

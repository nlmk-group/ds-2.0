import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecured24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'var(--spectrum-yellow-50)'}
        d="M2 17V7.5h7.5l10.923 9.754c.685.612.253 1.746-.666 1.746H4a2 2 0 0 1-2-2Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M4 5v12h16V5h2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5h2Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-80)'} fillRule="evenodd" d="M20 9H4V7h16v2Z" clipRule="evenodd" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M18.779 17 8.986 9h3.194l-1.834-1.5L20 15.396V17h-1.221Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecured24;

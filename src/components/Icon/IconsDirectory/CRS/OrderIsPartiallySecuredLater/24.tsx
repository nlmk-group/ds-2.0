import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecuredLater24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'var(--spectrum-yellow-50)'}
        d="M2 20v-9.5h7.5l10.923 9.754c.685.612.253 1.746-.666 1.746H4a2 2 0 0 1-2-2Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M4 8v12h16V8h2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8h2Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-80)'} fillRule="evenodd" d="M20 12H4v-2h16v2Z" clipRule="evenodd" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="m18.779 20-9.793-8h.844l.516-1.5L20 18.396V20h-1.221Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-10)'} d="M22 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M15.993 3A6.997 6.997 0 0 0 9 10c0 3.864 3.129 7 6.993 7A7.004 7.004 0 0 0 23 10c0-3.864-3.136-7-7.007-7ZM16 15.6a5.598 5.598 0 0 1-5.6-5.6c0-3.094 2.506-5.6 5.6-5.6s5.6 2.506 5.6 5.6-2.506 5.6-5.6 5.6Zm-.7-9.1h1.05v3.675l3.15 1.869-.525.861L15.3 10.7V6.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecuredLater24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNewsPapers24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 19V6.045a1 1 0 0 1 .996-1l10-.036a1 1 0 0 1 1.004 1V19c0 .35.06.688.17 1H5a1 1 0 0 1-1-1Zm15 3a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1h-3V6.008a3 3 0 0 0-3.01-3l-10 .036a3 3 0 0 0-2.99 3v12.957a3 3 0 0 0 3 3L19 22Zm1-8v5a1 1 0 1 1-2 0v-5h2ZM6 8h8v2H6V8Zm0 3h6v2H6v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNewsPapers24;

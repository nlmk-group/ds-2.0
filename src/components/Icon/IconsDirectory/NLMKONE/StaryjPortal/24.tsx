import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStaryjPortal24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M11.427 5.622a1 1 0 0 1 1.146 0L18 9.421V19h-3v-5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5H6V9.42l5.427-3.798ZM4 10.821l-1.427.998-1.146-1.638 8.853-6.197a3 3 0 0 1 3.44 0l8.853 6.197-1.146 1.638L20 10.821V21h-7v-7h-2v7H4V10.82Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStaryjPortal24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabTrack24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.9 11.5a.9.9 0 1 0 0 1.8h19.096a.9.9 0 0 0 0-1.8H2.9Zm3.244 4.453a1.575 1.575 0 1 1-3.15 0 1.575 1.575 0 0 1 3.15 0Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.144 15.953a1.575 1.575 0 1 1 3.15 0 1.575 1.575 0 0 1-3.15 0Zm12.6 0a1.575 1.575 0 1 1-3.15 0 1.575 1.575 0 0 1 3.15 0Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.744 15.953a1.575 1.575 0 1 1 3.15 0 1.575 1.575 0 0 1-3.15 0ZM6.5 8.5V7h12v1.5h-12Zm0 2.25v-1.5h12v1.5h-12Z"
      />
    </svg>
  );
};

export default IconSlabTrack24;

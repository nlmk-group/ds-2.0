import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZakazatPeregovornuyu24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 4.5a3 3 0 1 1 5.495 1.666A5 5 0 0 1 10.975 10h2.05a5 5 0 0 1 2.48-3.834 3 3 0 1 1 4.99 0A4.998 4.998 0 0 1 23 10.5V12a1 1 0 1 1-2 0v-1.5a3 3 0 0 0-5.959-.5h2.854a2 2 0 0 1 1.953 1.566l1.11 5A2 2 0 0 1 19.008 19H18v3h-2v-3H8v3H6v-3H4.993a2 2 0 0 1-1.952-2.434l1.11-5A2 2 0 0 1 6.105 10H8.96a3 3 0 0 0-5.96.5V12a1 1 0 1 1-2 0v-1.5a4.998 4.998 0 0 1 2.505-4.334A2.986 2.986 0 0 1 3 4.5Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-.105 6.5 1.111 5H4.993l1.111-5h11.791Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZakazatPeregovornuyu24;

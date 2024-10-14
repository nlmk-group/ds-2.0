import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconITSupport24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M9 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.057a2 2 0 0 1-2 2h-6.847a1 1 0 0 0-.777.37l-1.711 2.109C10.775 14.633 9 14.003 9 12.59V3Zm9.615 0H11v8.181l.823-1.015a3 3 0 0 1 2.33-1.11H21V3h-2.385ZM13 5h5v2h-5V5ZM5 8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2v2H5ZM1 21h18v2H1v-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconITSupport24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileVideo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12zM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.087 10.154C9.487 9.792 9 10.09 9 10.816v5.367c0 .728.487 1.024 1.087.663l4.463-2.69c.6-.363.6-.95 0-1.311z"
      />
    </svg>
  );
};

export default IconFileVideo24;

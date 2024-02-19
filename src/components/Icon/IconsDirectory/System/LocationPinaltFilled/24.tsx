import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.615 17.925a1 1 0 0 1-.325-.219L7.2 13.603A6.798 6.798 0 0 1 12 2a6.786 6.786 0 0 1 6.273 4.196 6.802 6.802 0 0 1-1.473 7.407l-4.09 4.103a1 1 0 0 1-1.095.22Zm-1.613-9.037A2.002 2.002 0 0 0 12 10.79a1.999 1.999 0 0 0 1.962-2.392 2.003 2.003 0 0 0-2.727-1.459A2 2 0 0 0 10 8.789c0 .033 0 .066.002.099Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.293 20.291A1 1 0 0 1 5 19.998h14a1 1 0 0 1 .707 1.709A1 1 0 0 1 19 22H5a1 1 0 0 1-.707-1.709Z"
      />
    </svg>
  );
};

export default IconLocationPinaltFilled24;

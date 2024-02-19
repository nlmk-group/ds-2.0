import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReservedTo32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.293 3.707 12.586 8H2v2h10.586l-4.293 4.293 1.414 1.414L16.414 9 9.707 2.293 8.293 3.707ZM19 10a9 9 0 1 1-9 9H8A11 11 0 1 0 19 8v2Zm-1 9v-7h2v6h4v2h-6v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconReservedTo32;

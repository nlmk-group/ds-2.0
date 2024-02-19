import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReservedFrom32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.121 3.707 5.83 8h10.585v2H5.83l4.292 4.293-1.414 1.414L2 9l6.707-6.707 1.414 1.414ZM19 10a9 9 0 1 1-9 9H8A11 11 0 1 0 19 8v2Zm-1 9v-7h2v6h4v2h-6v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconReservedFrom32;

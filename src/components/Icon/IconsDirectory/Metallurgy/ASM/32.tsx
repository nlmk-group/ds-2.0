import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconASM32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.6 4H4v10.6h10.6V4Zm-8.5 8.5V6.1h6.4v6.4H6.1Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M4 19.602h8.5V26H4v2.1h10.6V17.501H4v2.1ZM25.995 6.1h-8.499V4h10.6v10.625h-2.1V6.1Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28.1 17.5H17.5v10.6h10.6V17.5ZM19.6 26v-6.4H26V26h-6.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconASM32;

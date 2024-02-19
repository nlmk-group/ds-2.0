import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCut32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M25.567 3.301a.9.9 0 0 1 .131 1.266l-8.538 10.51 3.247 3.996a5.4 5.4 0 1 1-1.288 1.27l-3.12-3.839-3.118 3.838a5.4 5.4 0 1 1-1.288-1.27l3.247-3.995-8.539-10.51a.9.9 0 0 1 1.397-1.135L16 13.65l8.3-10.218a.9.9 0 0 1 1.266-.13ZM4.9 23.501a3.6 3.6 0 1 1 7.2-.001 3.6 3.6 0 0 1-7.2 0Zm15 0a3.6 3.6 0 1 1 7.2-.001 3.6 3.6 0 0 1-7.2 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCut32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChart32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66667 4H25.3333C26.8 4 28 5.2 28 6.66667V25.3333C28 26.8 26.8 28 25.3333 28H6.66667C5.2 28 4 26.8 4 25.3333V6.66667C4 5.2 5.2 4 6.66667 4ZM25.3333 25.3333H6.66667V6.66667H25.3333V25.3333ZM17.3333 22.6667H14.6667V9.33333H17.3333V22.6667ZM12 22.6667H9.33333V13.3333H12V22.6667ZM20 22.6667H22.6667V17.3333H20V22.6667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChart32;

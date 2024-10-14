import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZayavkaNaPriemDelegaci24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6 2a2 2 0 0 0-2 2v8.354a4 4 0 0 1 2-1.228V4h12v7.126a4 4 0 0 1 2 1.228V4a2 2 0 0 0-2-2H6Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M15 6H8v2h7V6Zm-3 3H8v2h4V9Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.126 21a4.008 4.008 0 0 1 1.936-2.5A3.982 3.982 0 0 1 7 18c.703 0 1.364.181 1.938.5A4.008 4.008 0 0 1 11 22v1H3v-1c0-.345.044-.68.126-1ZM7 20a2 2 0 0 1 1.732 1H5.268A2 2 0 0 1 7 20Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M7 17a1.997 1.997 0 0 1-2-2 2 2 0 1 1 2 2Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13.126 21a4.008 4.008 0 0 1 1.936-2.5A3.982 3.982 0 0 1 17 18c.703 0 1.364.181 1.938.5A4.008 4.008 0 0 1 21 22v1h-8v-1c0-.345.044-.68.126-1ZM17 20a2 2 0 0 1 1.732 1h-3.464A2 2 0 0 1 17 20Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M17 17a1.997 1.997 0 0 1-2-2 2 2 0 1 1 2 2Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconZayavkaNaPriemDelegaci24;

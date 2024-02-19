import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGaugeIzmerenie16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M5.166 5.585 7.54 7.96a.65.65 0 0 0 .92-.92L6.085 4.666l-.919.92Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.65 2.038V.5h-1.3v1.538a5.5 5.5 0 0 0 0 10.924V15.5h1.3v-2.538a5.5 5.5 0 0 0 0-10.924ZM12.2 7.5a4.2 4.2 0 1 1-8.4 0 4.2 4.2 0 0 1 8.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconGaugeIzmerenie16;

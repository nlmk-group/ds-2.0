import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPodcasts24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.346 3.76a10 10 0 0 0-.044 16.466l1.14-1.643A8 8 0 0 1 6.477 5.41L5.346 3.76Zm.1 5.444A6 6 0 0 1 7.357 7.06l1.13 1.65a4 4 0 0 0-.017 6.586L7.33 16.94a6 6 0 0 1-1.886-7.735Zm13.108 0a6 6 0 0 0-1.912-2.145l-1.13 1.65a4 4 0 0 1 .017 6.586l1.14 1.644a6 6 0 0 0 1.886-7.735Zm3.287-1.87a10 10 0 0 0-3.187-3.574l-1.13 1.65a8 8 0 0 1 .034 13.173l1.14 1.643A10.001 10.001 0 0 0 21.84 7.335ZM10 15.509l5-3.5-5-3.5v7Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPodcasts24;

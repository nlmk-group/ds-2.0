import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconManagementRating24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7.814 1c2.04 0 3.73 1.65 3.73 3.71s-1.68 3.72-3.73 3.72c-.09 0-.28.01-.28.01a4.716 4.716 0 0 0-4.45 4.71V14h2.31c.55 0 1 .45 1 1s-.45 1-1 1h-3.31c-.55 0-1-.45-1-1v-1.85c0-2.69 1.57-5 3.85-6.08-.53-.64-.85-1.46-.85-2.36 0-2.06 1.69-3.71 3.73-3.71Zm1.74 3.71c0-.93-.78-1.71-1.74-1.71s-1.73.78-1.73 1.71c0 .93.78 1.71 1.73 1.71s1.74-.77 1.74-1.71Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.084 6a1 1 0 0 1 .897.557l2.118 4.293 4.737.688a1 1 0 0 1 .554 1.706l-3.427 3.341.809 4.718a1 1 0 0 1-1.451 1.054l-4.237-2.227-4.237 2.227a1 1 0 0 1-1.45-1.054l.808-4.718-3.427-3.341a1 1 0 0 1 .554-1.706l4.737-.688 2.118-4.293A1 1 0 0 1 15.084 6Zm0 3.26-1.454 2.947a1 1 0 0 1-.753.546l-3.253.473 2.354 2.294a1 1 0 0 1 .287.885l-.555 3.24 2.909-1.53a1 1 0 0 1 .93 0l2.91 1.53-.556-3.24a1 1 0 0 1 .287-.885l2.354-2.294-3.253-.473a1 1 0 0 1-.753-.546L15.084 9.26Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconManagementRating24;

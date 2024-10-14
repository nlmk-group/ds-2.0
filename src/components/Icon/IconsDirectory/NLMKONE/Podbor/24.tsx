import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPodbor24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M14.084 8a6 6 0 1 0 3.477 10.89L20.67 22a1 1 0 0 0 1.414-1.414l-3.11-3.11A6 6 0 0 0 14.085 8Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPodbor24;

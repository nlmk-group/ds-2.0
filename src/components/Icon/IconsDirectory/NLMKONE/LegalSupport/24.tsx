import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLegalSupport24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm1 9V6h-2v3h2Zm-1-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM3 7h6.558A8.475 8.475 0 0 0 12 12.02v7.48a1 1 0 1 1-2 0V9H5.571l2.362 6.141A1 1 0 0 1 8 15.5a3.5 3.5 0 1 1-7 0 1 1 0 0 1 .067-.359L3.429 9H3a1 1 0 0 1 0-2Zm11.067 8.141.52-1.354a8.44 8.44 0 0 0 1.92.582l-.498 1.294a1.5 1.5 0 0 0 2.982 0l-.453-1.18a8.477 8.477 0 0 0 2-.369l.395 1.027A1 1 0 0 1 21 15.5a3.5 3.5 0 1 1-7 0 1 1 0 0 1 .067-.359ZM5 23a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm-.5-6a1.5 1.5 0 0 0 1.491-1.337L4.5 11.786l-1.491 3.877A1.5 1.5 0 0 0 4.5 17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLegalSupport24;

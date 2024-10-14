import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDobroservice24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8.194 3.819 6.07 5.944 4.655 4.53 6.78 2.405l1.414 1.414Zm.356 4.606 6.01-6.01L13.148 1l-6.01 6.01L8.55 8.426Zm2.477 2.477 7.013-7.013-1.415-1.414-7.012 7.013 1.414 1.414Zm9.152-2.708L18.054 6.07l1.414-1.414 2.125 2.125-1.414 1.414Zm-4.606.356 6.01 6.01 1.415-1.414-6.011-6.01-1.414 1.414Zm-2.477 2.477 7.012 7.013 1.414-1.415-7.012-7.012-1.414 1.414Zm-7.152 6.901-2.125-2.125-1.414 1.415 2.125 2.125 1.414-1.415Zm-3.53-8.491 6.01 6.01-1.413 1.415L1 10.85l1.414-1.414ZM3.89 5.958l7.013 7.012-1.414 1.415-7.013-7.013L3.89 5.958Zm11.915 14.22 2.125-2.124 1.414 1.414-2.125 2.125-1.414-1.414Zm-.356-4.605-6.01 6.01 1.413 1.415 6.011-6.011-1.414-1.414Zm-2.477-2.477-7.013 7.012 1.415 1.414 7.012-7.012-1.414-1.414Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDobroservice24;

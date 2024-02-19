import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M27 22.503c-.001 1.19-.99 2.164-2.2 2.164V10.583l-5.5-5.416H9.4C9.4 3.975 10.39 3 11.6 3h8.8L27 9.5v13.003Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M20.4 29c1.21 0 2.2-.975 2.2-2.167V15.798h-8.576V7.333H7.2C5.99 7.333 5 8.308 5 9.5v17.333A2.18 2.18 0 0 0 7.189 29H20.4Zm-11-10.834h8.8v2.167H9.4v-2.166Zm0 4.334h5.867v2.167H9.4V22.5Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="m16.024 7.356 6.54 6.442h-6.54V7.356Z" />
    </svg>
  );
};

export default IconSourceDocFilled32;

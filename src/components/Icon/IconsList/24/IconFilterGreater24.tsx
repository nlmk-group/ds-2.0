import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterGreater24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99976 19.9999L19.9999 11.9998L3.99976 3.99976V6.97223L14.055 11.9998L3.99976 17.0274V19.9999Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterGreater24;

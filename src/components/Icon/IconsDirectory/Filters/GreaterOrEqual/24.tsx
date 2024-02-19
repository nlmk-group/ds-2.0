import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGreaterOrEqual24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 20.108h12.888V17.96H5v2.148ZM5 17l14-7L5 3v2.57L13.86 10 5 14.43V17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGreaterOrEqual24;

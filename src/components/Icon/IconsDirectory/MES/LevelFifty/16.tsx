import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelFifty16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5Zm0 1a4 4 0 0 0-4 4h14a4 4 0 0 0-4-4H5Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelFifty16;

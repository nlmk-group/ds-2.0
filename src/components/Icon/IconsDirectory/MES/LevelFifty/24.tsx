import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelFifty24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a8 8 0 1 0 0 16h8a8 8 0 1 0 0-16H8Zm0 1a7 7 0 0 0-7 7h22a7 7 0 0 0-7-7H8Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelFifty24;

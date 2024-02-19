import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPauseFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M6 28h6.857V4H6v24ZM19.714 4v24h6.857V4h-6.857Z" />
    </svg>
  );
};

export default IconPauseFilled32;

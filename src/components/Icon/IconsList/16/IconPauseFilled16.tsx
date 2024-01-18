import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPauseFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M3 14H6.42857V2H3V14ZM9.85714 2V14H13.2857V2H9.85714Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconPauseFilled16;

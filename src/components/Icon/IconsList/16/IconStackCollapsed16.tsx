import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconStackCollapsed16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M5.33301 3.66667L5.33301 13L12.6663 8.33333L5.33301 3.66667Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconStackCollapsed16;

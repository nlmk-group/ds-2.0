import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M7.4 2.03a6 6 0 1 0 6.57 6.57H7.4V2.03Z" />
      <path fill={htmlColor || 'currentColor'} d="M13.97 7.4A6.002 6.002 0 0 0 8.6 2.03V7.4h5.37Z" />
    </svg>
  );
};

export default IconAnalyticsFilled16;

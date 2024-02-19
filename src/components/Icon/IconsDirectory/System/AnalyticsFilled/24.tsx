import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M11.1 3.044a9.001 9.001 0 1 0 9.856 9.856H11.1V3.044Z" />
      <path fill={htmlColor || 'currentColor'} d="M20.956 11.1A9.003 9.003 0 0 0 12.9 3.044V11.1h8.056Z" />
    </svg>
  );
};

export default IconAnalyticsFilled24;

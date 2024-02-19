import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M17.4 7.718 15.7 6l-5.704 5.77 1.7 1.718 5.704-5.77Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="m22 7.717-1.71-1.716-8.595 8.694-3.396-3.427-1.7 1.718 5.096 5.153L22 7.717ZM8.795 16.421 3.71 11.268 2 12.985l5.096 5.154 1.7-1.718Z"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckFilled24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconJsonOutlined24: FC<IIconsProps> = ({ color = 'inherit' }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9 4H7.8C6.14315 4 4.8 5.34315 4.8 7V9.2C4.8 10.7464 3.5464 12 2 12V12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 4H16.2C17.8569 4 19.2 5.34315 19.2 7V9.2C19.2 10.7464 20.4536 12 22 12V12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 20H7.8C6.14315 20 4.8 18.6569 4.8 17V14.8C4.8 13.2536 3.5464 12 2 12V12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M15 20H16.2C17.8569 20 19.2 18.6569 19.2 17V14.8C19.2 13.2536 20.4536 12 22 12V12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconJsonOutlined24;

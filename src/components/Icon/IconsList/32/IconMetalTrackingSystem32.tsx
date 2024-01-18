import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetalTrackingSystem32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10.72C5 10.1898 5.44772 9.76 6 9.76H12C12.5523 9.76 13 10.1898 13 10.72C13 11.2502 12.5523 11.68 12 11.68H6C5.44772 11.68 5 11.2502 5 10.72Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 9.76L26 9.76C26.5523 9.76 27 10.1898 27 10.72C27 11.2502 26.5523 11.68 26 11.68L16.5 11.68V9.76Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 22.4821V10.72H9V22.4821C9 24.6281 10.439 26.08 11.9 26.08H20.1C21.5734 26.08 23 24.7126 23 22.4821V10.72H25V22.4821C25 25.404 23.0266 28 20.1 28H11.9C8.96095 28 7 25.2903 7 22.4821Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0009 4C16.5531 4 17.0009 4.42981 17.0009 4.96V13.5388C18.6954 13.9826 20.0009 15.5127 20.0009 17.2495C20.0009 19.2731 18.2965 21.0895 16.1009 21.0895C14.5612 21.0895 13.1667 20.1716 12.5608 18.8702L11.5158 17.9607L12.8592 16.5383L14.0725 17.5943C14.193 17.6991 14.2851 17.8307 14.3407 17.9774C14.6007 18.664 15.3323 19.1695 16.1009 19.1695C17.1052 19.1695 18.0009 18.2979 18.0009 17.2495C18.0009 16.2437 17.0486 15.3295 16.0009 15.3295C15.4486 15.3295 15.0009 14.8997 15.0009 14.3695V4.96C15.0009 4.42981 15.4486 4 16.0009 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetalTrackingSystem32;

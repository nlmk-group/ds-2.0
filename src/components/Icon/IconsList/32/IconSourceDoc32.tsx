import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSourceDoc32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6 26.8333V13.8331L16 7.33304L7.2 7.33304C5.99 7.33304 5 8.30805 5 9.49974L5 26.8333C5 28.025 5.979 29 7.189 29H20.4C21.61 29 22.6 28.025 22.6 26.8333ZM20.4 26.8333H7.189L7.189 9.49974H14.9V14.9165H20.4L20.4 26.8333Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M27 22.5026C26.9987 23.6932 26.0092 24.667 24.8 24.667L24.8 10.5835L19.3 5.1667L9.4 5.1667C9.4 3.97501 10.39 3 11.6 3H20.4L27 9.50009V22.5003L27 22.5026Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M9.4 18.1665H18.2V20.3332H9.4V18.1665Z" fill={htmlColor || 'currentColor'} />
      <path d="M9.4 22.4999H15.2667V24.6666H9.4V22.4999Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconSourceDoc32;

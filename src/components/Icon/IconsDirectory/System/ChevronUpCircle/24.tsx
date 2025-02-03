import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronUpCircle24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.772 14.169L12 11.397L9.228 14.169L7.95 12.9L12 8.85L16.05 12.9L14.772 14.169ZM12 21C7.032 21 3 16.968 3 12C3 7.032 7.032 3 12 3C16.968 3 21 7.032 21 12C21 16.968 16.968 21 12 21ZM12 4.8C8.022 4.8 4.8 8.022 4.8 12C4.8 15.978 8.022 19.2 12 19.2C15.978 19.2 19.2 15.978 19.2 12C19.2 8.022 15.978 4.8 12 4.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronUpCircle24;

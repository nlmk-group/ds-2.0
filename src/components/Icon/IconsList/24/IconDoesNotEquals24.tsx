import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDoesNotEquals24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.9096 19.1419L4.28632 4.51868L2.87211 5.9329L17.4954 20.5562L18.9096 19.1419Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0142 16.6001H20V14.6001H17.0142L19.0142 16.6001ZM14.1858 14.6001L16.1858 16.6001H4V14.6001H14.1858Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4141 11H20V9H11.4141L13.4141 11ZM8.5857 9L10.5857 11H4V9H8.5857Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDoesNotEquals24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHomeOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.5882 5.84824L16.8824 10.6129V18.8824H14.7647V12.5294H8.41177V18.8824H6.29412V10.6129L11.5882 5.84824ZM11.5882 3L1 12.5294H4.17647V21H10.5294V14.6471H12.6471V21H19V12.5294H22.1765L11.5882 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHomeOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M8.477 5.738a.5.5 0 0 0-1 0v3.955a1.594 1.594 0 1 0 1 0V5.738Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.386 1.96a2.25 2.25 0 0 1 3.84 1.59v5.182a3.344 3.344 0 1 1-4.5 0V3.55c0-.597.238-1.169.66-1.59Zm1.59.34a1.25 1.25 0 0 0-1.25 1.25v5.414a.5.5 0 0 1-.192.394 2.344 2.344 0 1 0 2.885 0 .5.5 0 0 1-.192-.394V3.55a1.25 1.25 0 0 0-1.25-1.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTemperatureFilled16;

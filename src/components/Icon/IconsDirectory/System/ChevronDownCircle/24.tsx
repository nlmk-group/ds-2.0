import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const ChevronDownCircle24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.772 9.831 12 12.603 9.228 9.831 7.95 11.1 12 15.15l4.05-4.05-1.278-1.269ZM12 3c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9Zm0 16.2A7.198 7.198 0 0 1 4.8 12c0-3.978 3.222-7.2 7.2-7.2s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronDownCircle24;

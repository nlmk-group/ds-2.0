import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="m11.947 4.841-1.204-1.193L6.57 7.782l1.204 1.193 4.173-4.134Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="m15.356 4.84-1.212-1.19-6.37 6.31-2.517-2.487-1.204 1.193 3.721 3.687 7.582-7.511ZM5.57 11.16 1.856 7.472.644 8.665l3.722 3.687 1.204-1.193Z"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckFilled16;

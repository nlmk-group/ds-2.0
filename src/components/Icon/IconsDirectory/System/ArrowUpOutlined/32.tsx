import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowUpOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.85 10.024V26h-2.7V10.024l-7.241 7.04L6 15.21 16.5 5 27 15.209l-1.909 1.855-7.241-7.04Z"
      />
    </svg>
  );
};

export default IconArrowUpOutlined32;

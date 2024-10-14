import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMyFinances24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 6.5h4.75a3.25 3.25 0 0 1 0 6.5H11v1h1.5v2H11v2H9v-2H7.5v-2H9v-1H7.5v-2H9V6.5Zm2 4.5h2.75a1.25 1.25 0 1 0 0-2.5H11V11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMyFinances24;

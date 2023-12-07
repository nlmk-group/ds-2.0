import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconArrowBack32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M26.6666 14.6667H10.4399L17.8933 7.21333L15.9999 5.33333L5.33325 16L15.9999 26.6667L17.8799 24.7867L10.4399 17.3333H26.6666V14.6667Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconArrowBack32;

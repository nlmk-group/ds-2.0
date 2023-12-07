import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconPushPin24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M19 4L21 4L21 20L19 20L19 4ZM13 11L13 8L17 12L13 16L13 13L3 13L3 11L13 11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPushPin24;

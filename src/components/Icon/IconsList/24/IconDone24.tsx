import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDone24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M8.79995 15.9002L4.59995 11.7002L3.19995 13.1002L8.79995 18.7002L20.8 6.70017L19.4 5.30017L8.79995 15.9002Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDone24;

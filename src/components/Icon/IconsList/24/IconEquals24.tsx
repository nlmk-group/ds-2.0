import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconEquals24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M4 16.6001H20V14.6001H4V16.6001Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M20 9H4V11H20V9Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconEquals24;

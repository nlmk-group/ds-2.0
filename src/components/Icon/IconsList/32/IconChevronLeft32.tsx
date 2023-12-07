import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronLeft32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M21 9.9975L14.2011 16.5L21 23.0025L18.9069 25L10 16.5L18.9069 8L21 9.9975Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChevronLeft32;

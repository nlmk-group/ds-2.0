import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronLeft24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.9098 7.41L10.3298 12L14.9098 16.59L13.4998 18L7.49976 12L13.4998 6L14.9098 7.41Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChevronLeft24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMap32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M27.3333 4L27.12 4.04L20 6.8L12.1429 4L4.48 6.53334C4.2 6.62666 4 6.86666 4 7.17333V27.3333C4 27.7067 4.29333 28 4.66667 28L4.88 27.96L12.1429 25.2L20 28L27.52 25.4666C27.8 25.3734 28 25.1334 28 24.8267V4.66667C28 4.29333 27.7067 4 27.3333 4ZM13.3333 6.53334L19 8.58024V25.2L13.3333 23.2857V6.53334ZM6.14286 8.28571L11.2857 6.53334V23.2857L6.14286 25.2V8.28571ZM25.8571 23.7143L21.1429 25.2V8.71429L25.8571 7V23.7143Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMap32;

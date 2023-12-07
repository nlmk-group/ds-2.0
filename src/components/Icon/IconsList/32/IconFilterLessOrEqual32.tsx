import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterLessOrEqual32: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 26.9963L7.35962 26.9963V24.2346L25 24.2346V26.9963ZM25 23.0002L6.99971 14L25 4.99985V8.30501L13.61 14L25 19.695V23.0002Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterLessOrEqual32;

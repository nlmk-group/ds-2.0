import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBunkerOutlined32: FC<IIconsProps> = ({
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
        d="M4 5C4 4.44772 4.44772 4 5 4H27C27.5523 4 28 4.44772 28 5V17.6492C28 17.8763 27.9227 18.0966 27.7809 18.2739L20.3002 27.6247C20.1105 27.8619 19.8232 28 19.5194 28H12.4806C12.1768 28 11.8895 27.8619 11.6998 27.6247L4.21913 18.2739C4.07728 18.0966 4 17.8763 4 17.6492V5Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
      />
      <path
        d="M4 13L28 13"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconBunkerOutlined32;

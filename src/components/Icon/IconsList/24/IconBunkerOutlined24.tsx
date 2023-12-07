import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBunkerOutlined24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V13.1492C21 13.3763 20.9227 13.5966 20.7809 13.7739L15.3002 20.6247C15.1105 20.8619 14.8232 21 14.5194 21H9.48062C9.17684 21 8.88953 20.8619 8.69976 20.6247L3.21913 13.7739C3.07728 13.5966 3 13.3763 3 13.1492V4Z"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
      />
      <path
        d="M3 10L21 10"
        stroke={htmlColor || 'currentColor'}
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconBunkerOutlined24;

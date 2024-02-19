import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPersonOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 4.5c1.375 0 2.5 1.125 2.5 2.5S13.375 9.5 12 9.5A2.507 2.507 0 0 1 9.5 7c0-1.375 1.125-2.5 2.5-2.5Zm0 11.25c3.375 0 7.25 1.613 7.5 2.5v1.25h-15v-1.238c.25-.9 4.125-2.512 7.5-2.512ZM12 2C9.238 2 7 4.237 7 7c0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.763-2.238-5-5-5Zm0 11.25c-3.338 0-10 1.675-10 5V22h20v-3.75c0-3.325-6.662-5-10-5Z"
      />
    </svg>
  );
};

export default IconPersonOutlined24;

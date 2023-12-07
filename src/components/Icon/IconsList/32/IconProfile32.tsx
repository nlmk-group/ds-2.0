import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconProfile32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M12 2C9.238 2 7 4.237 7 7c0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.763-2.238-5-5-5Zm0 11.25c-3.338 0-10 1.675-10 5V22h20v-3.75c0-3.325-6.662-5-10-5Z"/>
    </svg>
  );
};

export default IconProfile32;

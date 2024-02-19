import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureStroke32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.954 20.225a2.188 2.188 0 1 0 0 4.375 2.188 2.188 0 0 0 0-4.375Zm0 0v-8.75m-3.5 6.453V7.1a3.5 3.5 0 0 1 7 0v10.828a5.688 5.688 0 1 1-7 0Z"
      />
    </svg>
  );
};

export default IconTemperatureStroke32;

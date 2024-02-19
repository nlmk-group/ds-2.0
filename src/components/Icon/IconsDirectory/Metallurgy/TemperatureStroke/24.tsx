import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureStroke24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M11.966 15.169a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Zm0 0V8.606m-2.625 4.84V5.325a2.625 2.625 0 0 1 5.25 0v8.121a4.266 4.266 0 1 1-5.25 0Z"
      />
    </svg>
  );
};

export default IconTemperatureStroke24;

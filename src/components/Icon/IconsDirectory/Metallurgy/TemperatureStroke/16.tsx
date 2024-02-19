import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTemperatureStroke16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.977 10.113a1.094 1.094 0 1 0 0 2.187 1.094 1.094 0 0 0 0-2.188Zm0 0V5.738m-1.75 3.226V3.55a1.75 1.75 0 0 1 3.5 0v5.414a2.844 2.844 0 1 1-3.5 0Z"
      />
    </svg>
  );
};

export default IconTemperatureStroke16;

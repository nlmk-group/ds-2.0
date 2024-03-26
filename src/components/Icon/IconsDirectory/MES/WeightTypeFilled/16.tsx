import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWeightTypeFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth="1.2"
        d="M5.5 2.5h5a1 1 0 1 1 0 2h-.042a.958.958 0 0 0-.493 1.779l1.55.93a1 1 0 0 1 .485.857V12.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.066a1 1 0 0 1 .486-.857l1.549-.93A.958.958 0 0 0 5.542 4.5H5.5a1 1 0 0 1 0-2Z"
      />
    </svg>
  );
};

export default IconWeightTypeFilled16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconGreaterThan24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.01807 19L20.018 12L6.01807 5V7.60092L14.8162 12L6.01807 16.3991V19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGreaterThan24;

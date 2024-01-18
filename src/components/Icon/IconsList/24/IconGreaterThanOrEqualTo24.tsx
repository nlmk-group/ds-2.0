import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconGreaterThanOrEqualTo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.57104 19.9295L17.5711 19.9295V17.9295L5.57104 17.9295V19.9295ZM5.57104 17.0354L18.6064 10.5177L5.57104 4V6.39355L13.8193 10.5177L5.57104 14.6418V17.0354Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGreaterThanOrEqualTo24;

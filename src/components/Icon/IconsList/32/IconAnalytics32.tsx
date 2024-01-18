import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAnalytics32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM25.5257 17.2C24.9352 21.9356 20.8955 25.6 16 25.6C10.6981 25.6 6.4 21.3019 6.4 16C6.4 11.1045 10.0644 7.06479 14.8 6.47427V17.2H25.5257ZM25.5257 14.8H17.2V6.47427C21.5425 7.01577 24.9842 10.4575 25.5257 14.8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAnalytics32;

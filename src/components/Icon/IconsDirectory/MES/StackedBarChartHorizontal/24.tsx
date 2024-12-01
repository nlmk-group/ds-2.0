import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarChartHorizontal24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10.1V13.9h-6.077V10.1H21Zm-7.339 0V13.9h-3.038V10.1h3.038ZM9.155 13.9V10.1H3v3.802h6.155ZM14.908 3v3.802H11.75V3h3.16Zm-4.567 3.802V3H7.302v3.802h3.039ZM5.857 3v3.802H3V3h2.857Zm12.26 18v-3.802H12.8V21h5.317Zm-6.82-3.802V21H8.258v-3.802h3.04ZM6.798 21v-3.802H3V21h3.798Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarChartHorizontal24;

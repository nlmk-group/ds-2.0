import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartDonut16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.15 1v1.974a4.555 4.555 0 0 1 3.9 4.51c0 .586-.117 1.14-.325 1.655l1.703.997A6.449 6.449 0 0 0 15 7.484C15 4.108 12.432 1.326 9.15 1ZM8.5 12.045a4.544 4.544 0 0 1-3.217-1.336A4.567 4.567 0 0 1 3.95 7.484c0-2.3 1.696-4.19 3.9-4.51V1A6.504 6.504 0 0 0 2 7.484a6.524 6.524 0 0 0 4.013 6.02 6.475 6.475 0 0 0 7.72-2.17l-1.69-.996A4.48 4.48 0 0 1 8.5 12.045Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartDonut16;

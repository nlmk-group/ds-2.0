import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartTree24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14 6h8v16h-8V6ZM2 4h20V2H2v2Zm0 4h10V6H2v2Zm7 14h3V10H9v12Zm-7 0h5V10H2v12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartTree24;

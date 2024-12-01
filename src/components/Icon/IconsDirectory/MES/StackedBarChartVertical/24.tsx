import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarChartVertical24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.1 3H13.9v6.077H10.1V3Zm0 7.339H13.9v3.038H10.1V10.34Zm3.801 4.506H10.1V21h3.802v-6.155ZM3 9.092h3.802v3.159H3v-3.16Zm3.802 4.567H3v3.039h3.802v-3.039ZM3 18.143h3.802V21H3v-2.857Zm18-12.26h-3.802V11.2H21V5.883Zm-3.802 6.82H21v3.039h-3.802v-3.04ZM21 17.202h-3.802V21H21v-3.798Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarChartVertical24;

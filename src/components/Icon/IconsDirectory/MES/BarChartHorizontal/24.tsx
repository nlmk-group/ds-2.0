import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartHorizontal24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10.2v3.6H3v-3.6h18ZM15.6 3v3.857H3V3h12.6Zm-4.886 18v-3.6H3V21h7.714Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBarChartHorizontal24;

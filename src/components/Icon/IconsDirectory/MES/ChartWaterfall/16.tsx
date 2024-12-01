import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartWaterfall16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M2 1h1.3v11.7H15V14H2V1Zm9.75 0h1.95v10.4h-1.95V1ZM4.6 6.85h1.95v4.55H4.6V6.85Zm4.55-5.2h1.95v2.6H9.15v-2.6ZM7.2 4.9h1.95v2.6H7.2V4.9Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartWaterfall16;

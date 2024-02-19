import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M19.3 1.5h-6.6v29h6.6v-29ZM8.5 9.9h-7v20.6h7V9.9Zm22 7.6h-6.6v13h6.6v-13Z"
      />
    </svg>
  );
};

export default IconBarChartFilled32;

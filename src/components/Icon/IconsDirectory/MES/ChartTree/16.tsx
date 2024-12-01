import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartTree16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.8 3.6H15V14H9.8V3.6ZM2 2.3h13V1H2v1.3Zm0 2.6h6.5V3.6H2v1.3ZM6.55 14H8.5V6.2H6.55V14ZM2 14h3.25V6.2H2V14Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartTree16;

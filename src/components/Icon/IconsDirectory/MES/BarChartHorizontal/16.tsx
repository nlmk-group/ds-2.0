import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartHorizontal16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6.8v2.4H2V6.8h12ZM10.4 2v2.571H2V2h8.4ZM7.143 14v-2.4H2V14h5.143Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBarChartHorizontal16;

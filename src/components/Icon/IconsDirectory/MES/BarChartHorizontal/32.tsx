import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBarChartHorizontal32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 13.6v4.8H4v-4.8h24ZM20.8 4v5.143H4V4h16.8Zm-6.514 24v-4.8H4V28h10.286Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBarChartHorizontal32;

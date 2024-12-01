import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarChartVertical16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6.733 2h2.534V6.05H6.733V2Zm0 4.893h2.534v2.025H6.733V6.893Zm2.534 3.004H6.733V14h2.534V9.897ZM2 6.06h2.535v2.106H2V6.061Zm2.535 3.045H2v2.026h2.535V9.106ZM2 12.096h2.535V14H2v-1.904Zm12-8.174h-2.535v3.545H14V3.922Zm-2.535 4.547H14v2.025h-2.535V8.47ZM14 11.468h-2.535V14H14v-2.532Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarChartVertical16;

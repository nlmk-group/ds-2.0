import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartBubble24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M7.2 11.2c1.77 0 3.2 1.43 3.2 3.2 0 1.77-1.43 3.2-3.2 3.2-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2Zm7.6 4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm.4-12a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartBubble24;

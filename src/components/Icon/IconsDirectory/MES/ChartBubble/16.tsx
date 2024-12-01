import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartBubble16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M4.8 7.467c1.18 0 2.134.953 2.134 2.133 0 1.18-.954 2.133-2.134 2.133A2.131 2.131 0 0 1 2.667 9.6c0-1.18.953-2.133 2.133-2.133Zm5.067 3.2a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666Zm.267-8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartBubble16;

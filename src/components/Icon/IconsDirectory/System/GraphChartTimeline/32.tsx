import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGraphChartTimeline32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M30 10.546c0 1.4-1.145 2.545-2.546 2.545a2.16 2.16 0 0 1-.649-.09l-4.53 4.519c.063.204.089.433.089.662 0 1.4-1.146 2.545-2.546 2.545a2.553 2.553 0 0 1-2.545-2.545c0-.23.025-.458.089-.662l-3.246-3.245a2.264 2.264 0 0 1-.662.089c-.229 0-.458-.026-.661-.09l-5.791 5.804c.063.204.089.42.089.65 0 1.4-1.146 2.545-2.546 2.545A2.553 2.553 0 0 1 2 20.727c0-1.4 1.145-2.545 2.545-2.545.23 0 .446.025.65.089l5.803-5.791a2.246 2.246 0 0 1-.089-.662c0-1.4 1.146-2.545 2.545-2.545 1.4 0 2.546 1.145 2.546 2.545 0 .23-.025.458-.09.662l3.246 3.245c.204-.063.433-.089.662-.089.23 0 .458.026.662.09l4.518-4.532a2.16 2.16 0 0 1-.089-.649c0-1.4 1.146-2.545 2.546-2.545S30 9.145 30 10.546Z"
      />
    </svg>
  );
};

export default IconGraphChartTimeline32;

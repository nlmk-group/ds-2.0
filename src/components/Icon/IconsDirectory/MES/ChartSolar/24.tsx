import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartSolar24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.85 13.7-3.747-2.288V6.98a5.14 5.14 0 0 1 3.747 6.72Zm.566 2.694 2.578 1.574A9.994 9.994 0 0 1 11.975 22C6.772 22 2.505 18.025 2 12.977h3.03a7.017 7.017 0 0 0 6.945 6.015c2.203 0 4.157-.99 5.44-2.598Zm-1.587-.968-4.01-2.449H6.955a5.14 5.14 0 0 0 8.874 2.448Zm-8.864-4.454h4.133V6.94a5.144 5.144 0 0 0-4.133 4.032Zm6.138-8.959C18.105 2.573 22 6.825 22 11.975a9.9 9.9 0 0 1-.882 4.08L18.49 14.52c.321-.792.502-1.644.502-2.546 0-3.496-2.553-6.375-5.89-6.918V2.013ZM5.03 10.972c.44-3.073 2.873-5.49 5.944-5.935V2A10.015 10.015 0 0 0 2 10.972h3.03Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartSolar24;

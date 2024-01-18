import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconAutorenewSystemOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.8182 8H9.90906L12.4545 10.5L15 8H13.0909C13.0909 5.2375 10.8127 3 7.99997 3C7.00088 3 6.07179 3.2875 5.28906 3.775L6.21815 4.6875C6.74634 4.40625 7.35724 4.25 7.99997 4.25C10.1063 4.25 11.8182 5.93125 11.8182 8Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M10.7109 12.225L9.78182 11.3125C9.24727 11.5875 8.64273 11.75 8 11.75C5.89364 11.75 4.18182 10.0687 4.18182 7.99999H6.09091L3.54545 5.49999L1 7.99999H2.90909C2.90909 10.7625 5.18727 13 8 13C8.99909 13 9.92818 12.7125 10.7109 12.225Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.134 8.938H8.724L9.078 10H9.87L8.37 5.8H7.53L6.03 10H6.786L7.134 8.938ZM8.514 8.302H7.344L7.65 7.384L7.932 6.52L8.514 8.302Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAutorenewSystemOutlined16;

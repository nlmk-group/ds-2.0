import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheetsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="m5.107 13.182.42-.42.825-.55a10.004 10.004 0 0 1 12.634 1.245l.015-.015.95.95 7.966-7.968a10.05 10.05 0 0 1 1.392 9.79 10.052 10.052 0 0 1-2.073 3.26l.005.006-8.088 8.077A10.048 10.048 0 0 1 2 20.449a10.053 10.053 0 0 1 3.107-7.267Zm6.804 9.965a2.613 2.613 0 1 0 0-5.226 2.613 2.613 0 0 0 0 5.226Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M13.148 7.973a12.612 12.612 0 0 0-2.874.046l2.401-2.4A10.048 10.048 0 0 1 26.07 4.577l-6.178 6.18a12.617 12.617 0 0 0-6.743-2.784Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconListSheetsFilled32;

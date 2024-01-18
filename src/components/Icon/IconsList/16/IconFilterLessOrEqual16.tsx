import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterLessOrEqual16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14.4421L3.21978 14.4421V12.7544L14 12.7544V14.4421ZM14 12.0001L2.99982 6.50001L14 0.999911V3.01973L7.03946 6.50001L14 9.9803V12.0001Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterLessOrEqual16;

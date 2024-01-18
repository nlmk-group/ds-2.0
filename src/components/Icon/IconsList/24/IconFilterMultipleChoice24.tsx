import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterMultipleChoice24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M22 8.00005H13V10.0001H22V8.00005ZM22 16.0001H13V18.0001H22V16.0001ZM5.54 12.0001L2 8.46005L3.41 7.05005L5.53 9.17005L9.77 4.93005L11.18 6.34005L5.54 12.0001ZM5.54 20.0001L2 16.4601L3.41 15.0501L5.53 17.1701L9.77 12.9301L11.18 14.3401L5.54 20.0001Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterMultipleChoice24;

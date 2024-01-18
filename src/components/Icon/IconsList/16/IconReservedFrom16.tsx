import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconReservedFrom16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M3.29704 5.60001H7.84851V4.40001H3.29704L5.27277 2.42427L4.42425 1.57574L0.999981 5.00001L4.42425 8.42427L5.27277 7.57574L3.29704 5.60001Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M3.6 9C3.6 10.068 3.9167 11.1121 4.51006 12.0001C5.10342 12.8881 5.94679 13.5802 6.93351 13.9889C7.92023 14.3977 9.00599 14.5046 10.0535 14.2962C11.101 14.0879 12.0632 13.5736 12.8184 12.8184C13.5736 12.0632 14.0879 11.101 14.2962 10.0535C14.5046 9.00599 14.3977 7.92023 13.9889 6.93351C13.5802 5.94679 12.8881 5.10342 12.0001 4.51006C11.1121 3.9167 10.068 3.6 9 3.6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 5V9H12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
};

export default IconReservedFrom16;

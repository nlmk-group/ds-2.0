import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRepairWrenchTo16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.62565 7.22288C9.64135 6.20718 11.1387 5.96519 12.3834 6.49779L11.088 7.79326L10.6637 8.21752L11.088 8.64179L12.0339 9.58774L12.4582 10.012L12.8825 9.58774L14.1779 8.29227C14.7105 9.53697 14.4685 11.0344 13.4528 12.0501C12.56 12.9429 11.2953 13.2385 10.1548 12.9339L9.82041 12.8446L9.5757 13.0893L8.25145 14.4136C7.70211 14.9629 6.81146 14.9629 6.26212 14.4136C5.71278 13.8643 5.71278 12.9736 6.26212 12.4243L7.58637 11.1L7.83108 10.8553L7.74179 10.5209C7.43722 9.38045 7.73281 8.11572 8.62565 7.22288Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M6.8946 4.48573L3.9444 1.72718L4.7221 1L9 5L4.7221 9L3.9444 8.27282L6.8946 5.51427H1V4.48573H6.8946Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRepairWrenchTo16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownLeftOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2C14.5523 2 15 2.44772 15 3V4.00542C15 5.12411 15 6.0245 14.9405 6.75322C14.8792 7.50292 14.75 8.15854 14.4414 8.7642C13.9501 9.72853 13.166 10.5126 12.2017 11.0039C11.596 11.3125 10.9404 11.4417 10.1907 11.503C9.462 11.5625 8.56161 11.5625 7.44292 11.5625H5.41421L7.14461 13.2929C7.53513 13.6834 7.53513 14.3166 7.14461 14.7071C6.75408 15.0976 6.12092 15.0976 5.73039 14.7071L2.29289 11.2696C1.90237 10.8791 1.90237 10.2459 2.29289 9.85539L5.73039 6.41789C6.12092 6.02737 6.75408 6.02737 7.14461 6.41789C7.53513 6.80842 7.53513 7.44158 7.14461 7.83211L5.41421 9.5625H7.4C8.57161 9.5625 9.39017 9.56172 10.0279 9.50962C10.6539 9.45847 11.017 9.36289 11.2937 9.2219C11.8817 8.92229 12.3598 8.44423 12.6594 7.85622C12.8004 7.57949 12.896 7.21637 12.9471 6.59036C12.9992 5.95267 13 5.13411 13 3.9625V3C13 2.44772 13.4477 2 14 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftOutlined16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownLeftOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3C20.5523 3 21 3.44772 21 4V5.44444C21 7.08697 21 8.38091 20.9149 9.42222C20.8281 10.4846 20.6478 11.3717 20.237 12.1779C19.5659 13.4951 18.4951 14.5659 17.1779 15.237C16.3717 15.6478 15.4846 15.8281 14.4222 15.9149C13.3809 16 12.0869 16 10.4444 16H6.41421L9.70711 19.2929C10.0976 19.6834 10.0976 20.3166 9.70711 20.7071C9.31658 21.0976 8.68342 21.0976 8.29289 20.7071L3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929L8.29289 9.29289C8.68342 8.90237 9.31658 8.90237 9.70711 9.29289C10.0976 9.68342 10.0976 10.3166 9.70711 10.7071L6.41421 14H10.4C12.0967 14 13.309 13.9992 14.2594 13.9216C15.198 13.8449 15.7927 13.6982 16.27 13.455C17.2108 12.9757 17.9757 12.2108 18.455 11.27C18.6982 10.7927 18.8449 10.198 18.9216 9.25936C18.9992 8.30901 19 7.09666 19 5.4V4C19 3.44772 19.4477 3 20 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftOutlined24;

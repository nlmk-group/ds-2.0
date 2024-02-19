import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.92 5.37h5.4a1.35 1.35 0 0 1 1.35 1.35v21.6a1.35 1.35 0 0 1-1.35 1.35H4.02a1.35 1.35 0 0 1-1.35-1.35V6.72a1.35 1.35 0 0 1 1.35-1.35h5.4v-2.7h2.7v2.7h8.1v-2.7h2.7v2.7Zm-2.7 2.7h-8.1v2.7h-2.7v-2.7H5.37v5.4h21.6v-5.4h-4.05v2.7h-2.7v-2.7Zm6.75 8.1H5.37v10.8h21.6v-10.8Z"
      />
    </svg>
  );
};

export default IconCalendarOutlined32;

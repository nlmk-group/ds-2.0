import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsMultipleStopDotsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M23.778 4 30 10l-6.222 6v-4.5h-6.222v-3h6.222V4Zm-10.89 4.5c-.855 0-1.555.675-1.555 1.5s.7 1.5 1.556 1.5c.855 0 1.555-.675 1.555-1.5s-.7-1.5-1.555-1.5Zm-6.221 0c-.856 0-1.556.675-1.556 1.5s.7 1.5 1.556 1.5c.855 0 1.555-.675 1.555-1.5s-.7-1.5-1.555-1.5Zm1.555 15h6.222v-3H8.222V16L2 22l6.222 6v-4.5Zm10.89 0c.855 0 1.555-.675 1.555-1.5s-.7-1.5-1.556-1.5c-.855 0-1.555.675-1.555 1.5s.7 1.5 1.555 1.5Zm6.221 0c.856 0 1.556-.675 1.556-1.5s-.7-1.5-1.556-1.5c-.855 0-1.555.675-1.555 1.5s.7 1.5 1.555 1.5Z"
      />
    </svg>
  );
};

export default IconArrowsMultipleStopDotsOutlined32;

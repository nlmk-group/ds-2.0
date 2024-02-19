import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlockCloseFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 2C6.498 2 2 6.498 2 12s4.498 10 10 10 10-4.498 10-10S17.502 2 12 2ZM5.636 12c0-3.498 2.866-6.364 6.364-6.364 1.077 0 2.108.27 3.028.778l-8.614 8.614A6.236 6.236 0 0 1 5.636 12ZM12 18.364a6.236 6.236 0 0 1-3.028-.777l8.614-8.615c.508.92.778 1.951.778 3.028 0 3.498-2.866 6.364-6.364 6.364Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBlockCloseFilled24;

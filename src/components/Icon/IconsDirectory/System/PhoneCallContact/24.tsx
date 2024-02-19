import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPhoneCallContact24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 17.59v-2.108c.008-.345-.11-.68-.334-.943-.63-.742-2.788-1.216-3.644-1.034-.667.142-1.134.812-1.59 1.267a11.252 11.252 0 0 1-4.224-4.215c.456-.455 1.127-.921 1.27-1.587.182-.853-.292-2.998-1.028-3.63A1.41 1.41 0 0 0 8.518 5H6.406c-.804 0-1.474.723-1.4 1.532C5 13.505 10.443 19 17.464 18.994a1.428 1.428 0 0 0 1.535-1.405Z"
      />
    </svg>
  );
};

export default IconPhoneCallContact24;

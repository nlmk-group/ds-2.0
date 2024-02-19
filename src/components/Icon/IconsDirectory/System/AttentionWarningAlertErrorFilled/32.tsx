import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertErrorFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 16C2 8.272 8.258 2 15.986 2 23.728 2 30 8.272 30 16s-6.272 14-14.014 14C8.258 30 2 23.728 2 16Zm12.6-7h2.8v8.4h-2.8V9Zm0 11.2h2.8V23h-2.8v-2.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertErrorFilled32;

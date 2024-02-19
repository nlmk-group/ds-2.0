import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8.576 2.324 6.335 10.703a.636.636 0 0 1-.243.886.678.678 0 0 1-.333.087H1.665a.678.678 0 0 1-.333-.087.657.657 0 0 1-.243-.237.637.637 0 0 1 0-.649L7.424 2.324a.657.657 0 0 1 .244-.237.678.678 0 0 1 .908.237Zm-1.241 8.433v1.297h1.33v-1.297h-1.33Zm0-4.54v3.242h1.33V6.216h-1.33Z"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertFilled16;

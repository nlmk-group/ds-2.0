import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBugReportFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.4444 4.88889H12.2589C11.9089 4.28222 11.4267 3.76111 10.8433 3.36444L12.1111 2.09667L11.0144 1L9.32667 2.68778C8.96889 2.60222 8.60333 2.55556 8.22222 2.55556C7.84111 2.55556 7.47556 2.60222 7.12556 2.68778L5.43 1L4.33333 2.09667L5.59333 3.36444C5.01778 3.76111 4.53556 4.28222 4.18556 4.88889H2V6.44444H3.62556C3.58667 6.70111 3.55556 6.95778 3.55556 7.22222V8H2V9.55556H3.55556V10.3333C3.55556 10.5978 3.58667 10.8544 3.62556 11.1111H2V12.6667H4.18556C4.99444 14.0589 6.49556 15 8.22222 15C9.94889 15 11.45 14.0589 12.2589 12.6667H14.4444V11.1111H12.8189C12.8578 10.8544 12.8889 10.5978 12.8889 10.3333V9.55556H14.4444V8H12.8889V7.22222C12.8889 6.95778 12.8578 6.70111 12.8189 6.44444H14.4444V4.88889ZM9.77778 11.1111H6.66667V9.55556H9.77778V11.1111ZM9.77778 8H6.66667V6.44444H9.77778V8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBugReportFilled16;

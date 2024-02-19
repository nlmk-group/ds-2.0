import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBugReportFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M28.889 9.778h-4.371a9.31 9.31 0 0 0-2.831-3.05l2.535-2.535L22.03 2l-3.376 3.376a9.434 9.434 0 0 0-2.209-.265 9.16 9.16 0 0 0-2.193.265L10.86 2 8.667 4.193l2.52 2.536A9.43 9.43 0 0 0 8.37 9.778H4v3.11h3.251a10.32 10.32 0 0 0-.14 1.556V16H4v3.111h3.111v1.556c0 .529.062 1.042.14 1.555H4v3.111h4.371C9.99 28.118 12.991 30 16.444 30c3.454 0 6.456-1.882 8.074-4.667h4.37v-3.11h-3.25c.078-.514.14-1.027.14-1.556V19.11h3.11V16h-3.11v-1.556c0-.528-.062-1.042-.14-1.555h3.25V9.778Zm-9.333 12.444h-6.223v-3.11h6.223v3.11Zm0-6.222h-6.223v-3.111h6.223V16Z"
      />
    </svg>
  );
};

export default IconBugReportFilled32;

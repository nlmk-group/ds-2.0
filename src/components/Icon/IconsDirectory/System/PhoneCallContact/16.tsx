import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPhoneCallContact16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="M14 12.791v-1.806a1.203 1.203 0 0 0-.286-.809c-.54-.636-2.39-1.042-3.124-.886-.572.122-.972.696-1.363 1.086a9.645 9.645 0 0 1-3.62-3.613c.39-.39.966-.79 1.088-1.36.156-.731-.25-2.57-.88-3.112a1.208 1.208 0 0 0-.8-.29h-1.81c-.69 0-1.263.618-1.2 1.312C2 9.29 6.667 14 12.685 13.995A1.224 1.224 0 0 0 14 12.791Z"
      />
    </svg>
  );
};

export default IconPhoneCallContact16;

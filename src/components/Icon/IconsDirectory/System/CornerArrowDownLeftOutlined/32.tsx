import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownLeftOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 4a1 1 0 0 1 1 1v1.883c0 2.167 0 3.854-.11 5.208-.113 1.375-.344 2.494-.857 3.5a8.876 8.876 0 0 1-3.879 3.88c-1.007.512-2.125.744-3.5.856-1.354.11-3.042.11-5.209.11h-6.03l4.855 4.856a1 1 0 0 1-1.415 1.414l-6.562-6.562a1 1 0 0 1 0-1.415l6.562-6.562a1 1 0 0 1 1.415 1.414l-4.856 4.855H13.4c2.222 0 3.828 0 5.09-.104 1.252-.102 2.078-.3 2.756-.645a6.876 6.876 0 0 0 3.005-3.004c.345-.678.543-1.504.645-2.756.103-1.263.104-2.869.104-5.09V5a1 1 0 0 1 1-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftOutlined32;

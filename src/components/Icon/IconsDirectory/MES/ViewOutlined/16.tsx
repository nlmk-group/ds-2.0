import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.133 15.133a.667.667 0 0 1-.942 0l-1.462-1.461a3.333 3.333 0 1 1 .943-.943l1.461 1.461a.667.667 0 0 1 0 .943Zm-2.828-5.657a2 2 0 1 0-2.828 2.83 2 2 0 0 0 2.828-2.83ZM12 2.666H2.667V12h3.721c.119.472.311.922.57 1.333H2.667A1.333 1.333 0 0 1 1.333 12V2.667a1.333 1.333 0 0 1 1.334-1.334H12a1.333 1.333 0 0 1 1.333 1.334v4.291A4.597 4.597 0 0 0 12 6.388v-3.72Zm-8 8V9.334h2.514a4.64 4.64 0 0 0-.259 1.334H4ZM4 4h6.667v1.333H4V4Zm3.253 4H4V6.667h4.667v.143A4.645 4.645 0 0 0 7.253 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewOutlined16;

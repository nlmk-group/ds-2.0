import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsNotSecured32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M5.334 8v16h21.333V8h2.667v16a2.667 2.667 0 0 1-2.667 2.667H5.334A2.667 2.667 0 0 1 2.667 24V8h2.667Z"
        clipRule="evenodd"
      />
      <path fill={'#F76979'} d="M14.667 8h2.667v9.333h-2.667V8ZM14.667 18.667h2.667v2.666h-2.667v-2.666Z" />
      <path
        fill={'#F76979'}
        fillRule="evenodd"
        d="M14.667 8v9.333h2.667V8h-2.667Zm0 10.667v2.666h2.667v-2.666h-2.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsNotSecured32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 5v.667H2.667A.667.667 0 0 0 2 6.333v8c0 .368.298.667.667.667h10.666a.667.667 0 0 0 .667-.667v-8a.667.667 0 0 0-.667-.666H12V5a4 4 0 0 0-8 0Zm-.667 8.667V7h9.334v6.667H3.333Zm4-2.846a1.333 1.333 0 1 1 1.334 0v1.512H7.333v-1.512ZM10.667 5v.667H5.333V5a2.667 2.667 0 0 1 5.334 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLockCloseOutlined16;

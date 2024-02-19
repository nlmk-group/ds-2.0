import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 10v1.333H5.333c-.736 0-1.333.597-1.333 1.334v16C4 29.403 4.597 30 5.333 30h21.334c.736 0 1.333-.597 1.333-1.333v-16c0-.737-.597-1.334-1.333-1.334H24V10a8 8 0 1 0-16 0ZM6.667 27.333V14h18.666v13.333H6.667Zm8-5.69a2.667 2.667 0 1 1 2.666 0v3.024h-2.666v-3.024ZM21.333 10v1.333H10.667V10a5.333 5.333 0 1 1 10.666 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLockCloseOutlined32;

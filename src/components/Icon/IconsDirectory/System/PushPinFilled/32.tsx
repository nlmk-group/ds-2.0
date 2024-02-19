import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPushPinFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M24 1H9c-.825 0-1.5.675-1.5 1.5S8.175 4 9 4h1.5v7.5c0 2.49-2.01 4.5-4.5 4.5v3h8.955v10.5l1.5 1.5 1.5-1.5V19H27v-3c-2.49 0-4.5-2.01-4.5-4.5V4H24c.825 0 1.5-.675 1.5-1.5S24.825 1 24 1Z"
      />
    </svg>
  );
};

export default IconPushPinFilled32;

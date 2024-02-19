import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellOffFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.667 29c1.466 0 2.666-1.2 2.666-2.667H12A2.666 2.666 0 0 0 14.667 29Zm8-14.667c0-4.093-2.187-7.52-6-8.426V3h-4v2.907c-.32.08-.627.2-.92.306l10.92 10.92v-2.8ZM5.88 4.133 4 6.013 7.747 9.76c-.694 1.333-1.08 2.88-1.08 4.573V21L4 23.667V25h18.987l2.32 2.32 1.88-1.88L5.88 4.133Z"
      />
    </svg>
  );
};

export default IconNotificationsBellOffFilled32;

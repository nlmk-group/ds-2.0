import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockOpenFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.333 5.667h-.666V4.333a3.335 3.335 0 0 0-6.667 0h1.333c0-1.106.894-2 2-2 1.107 0 2 .894 2 2v1.334h-6C3.6 5.667 3 6.267 3 7v6.667C3 14.4 3.6 15 4.333 15h8c.734 0 1.334-.6 1.334-1.333V7c0-.733-.6-1.333-1.334-1.333Zm-2.666 4.666c0 .734-.6 1.334-1.334 1.334-.733 0-1.333-.6-1.333-1.334C7 9.6 7.6 9 8.333 9c.734 0 1.334.6 1.334 1.333Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLockOpenFilled16;

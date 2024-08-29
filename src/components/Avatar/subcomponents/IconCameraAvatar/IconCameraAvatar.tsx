import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../../Icon/IconsDirectory/IconsDirectory.module.scss';

import { IIconsProps } from '../../../Icon/types';

const IconCameraAvatar: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="none" viewBox="0 0 40 36" className={classes}>
      <path fill="#fff" d="M20 14c-3.252 0-6 2.748-6 6s2.748 6 6 6 6-2.748 6-6-2.748-6-6-6Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="M36 6h-5.172L25.414.586A2 2 0 0 0 24 0h-8a2 2 0 0 0-1.414.586L9.172 6H4c-2.206 0-4 1.794-4 4v22c0 2.206 1.794 4 4 4h32c2.206 0 4-1.794 4-4V10c0-2.206-1.794-4-4-4ZM20 30c-5.42 0-10-4.58-10-10s4.58-10 10-10 10 4.58 10 10-4.58 10-10 10Z"
      />
    </svg>
  );
};

export default IconCameraAvatar;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M30.355 11.503c-7.92-8.004-20.776-8.004-28.71 0l-.349.351 3.25 3.283.355-.359a15.583 15.583 0 0 1 22.198 0l.356.36 3.248-3.284-.348-.351Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M25.265 16.647c-5.11-5.162-13.408-5.161-18.529 0l-.349.35 3.25 3.284.355-.359a8.437 8.437 0 0 1 12.016 0l.356.359 3.249-3.283-.348-.351Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M20.175 21.791a5.853 5.853 0 0 0-8.349 0l-.348.351L16 26.711l4.52-4.568-.345-.352Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiFilled32;

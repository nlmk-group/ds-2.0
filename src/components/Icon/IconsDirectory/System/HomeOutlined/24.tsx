import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHomeOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m11.588 5.848 5.294 4.765v8.27h-2.117v-6.354H8.412v6.353H6.294v-8.27l5.294-4.764Zm0-2.848L1 12.53h3.176V21h6.353v-6.353h2.118V21H19v-8.47h3.177L11.588 3Z"
      />
    </svg>
  );
};

export default IconHomeOutlined24;

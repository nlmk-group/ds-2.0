import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M18.331 4.137a1.132 1.132 0 0 1 1.081 0l8.038 4.404a1.1 1.1 0 0 1 .083.05l-14.756 7.79-4.457-2.803v2.363l3.88 2.44a1 1 0 0 0 1 .038L28 10.607v2.439l-15.24 8.045L4 15.948v-3.38c0-.375.21-.722.551-.908l13.78-7.523Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M4 18.267v4.284c0 .367.201.707.53.896l7.655 4.404c.338.194.758.199 1.1.013l14.163-7.707a1.04 1.04 0 0 0 .552-.91v-3.94L13.2 23.12a1 1 0 0 1-.973-.022L4 18.267Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabFilled32;

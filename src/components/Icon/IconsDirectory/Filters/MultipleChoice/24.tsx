import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMultipleChoice24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22 8h-9v2h9V8Zm0 8h-9v2h9v-2ZM5.54 12 2 8.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 12Zm0 8L2 16.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 20Z"
      />
    </svg>
  );
};

export default IconMultipleChoice24;

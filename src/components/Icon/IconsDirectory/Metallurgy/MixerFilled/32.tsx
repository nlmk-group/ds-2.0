import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMixerFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.12 21.62a7.233 7.233 0 0 0 2.086-5.83 7.243 7.243 0 0 0-2.087-4.41l-1.202 1.203a5.543 5.543 0 0 1 .69 6.996 5.538 5.538 0 0 1-6.726 2.04 5.543 5.543 0 0 1-1.396-9.403 5.538 5.538 0 0 1 2.665-1.191v3.123a2.501 2.501 0 1 0 1.7 0V4.34h-.852v-.003c-.094 0-.188 0-.281.003h-.567v.026a12.16 12.16 0 0 0-9.877 17.867 12.168 12.168 0 0 0 14.26 5.908 12.16 12.16 0 0 0 8.572-12.831A12.167 12.167 0 0 0 24.6 7.9l-1.202 1.203A10.467 10.467 0 0 1 23.4 23.9l-2.28-2.28Z"
      />
    </svg>
  );
};

export default IconMixerFilled32;

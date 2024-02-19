import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowBottom32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m17.372 21.563 7.356-7.152 1.939 1.885L16 26.666 5.333 16.297l1.94-1.885 7.356 7.152V5.333h2.743v16.23Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M2.667 25.333h26.666V28H2.667v-2.667Z" />
    </svg>
  );
};

export default IconArrowBottom32;

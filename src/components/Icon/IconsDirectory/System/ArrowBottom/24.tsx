import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowBottom24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.028 16.172 5.518-5.364L20 12.222 12 20l-8-7.778 1.454-1.414 5.518 5.364V4h2.056v12.172Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M2 19h20v2H2v-2Z" />
    </svg>
  );
};

export default IconArrowBottom24;

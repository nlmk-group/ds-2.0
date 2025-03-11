import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsOverlySecured32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M2.667 9.333h26.667v16H2.667v-16Z" />
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M5.334 4h21.333v22.667H5.334V4Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M5.334 14.667v10.666h21.333V14.667h2.667v10.666A2.667 2.667 0 0 1 26.667 28H5.334a2.667 2.667 0 0 1-2.667-2.667V14.667h2.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsOverlySecured32;

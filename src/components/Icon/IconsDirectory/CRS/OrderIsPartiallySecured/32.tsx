import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecured32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'var(--spectrum-yellow-50)'}
        d="M2.667 22.667V10h10l14.564 13.005c.914.816.337 2.328-.888 2.328H5.333a2.667 2.667 0 0 1-2.666-2.666Z"
      />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M5.334 6.667v15.999h21.333v-16h2.667v16a2.667 2.667 0 0 1-2.667 2.667H5.334a2.667 2.667 0 0 1-2.667-2.666v-16h2.667Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-80)'} fillRule="evenodd" d="M26.667 12H5.334V9.333h21.333V12Z" clipRule="evenodd" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M25.038 22.666 11.982 12h4.258l-2.445-2 12.872 10.528v2.139h-1.629Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecured32;

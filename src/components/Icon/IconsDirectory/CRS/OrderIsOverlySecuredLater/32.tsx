import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsOverlySecuredLater32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M2.667 10.667h26.667v16H2.667v-16Z" />
      <path fill={htmlColor || 'var(--spectrum-red-40)'} d="M5.334 5.333h20.333a1 1 0 0 1 1 1V28H5.334V5.333Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M5.334 16v10.667h21.333V16h2.667v10.667a2.667 2.667 0 0 1-2.667 2.666H5.334a2.667 2.667 0 0 1-2.667-2.666V16h2.667Z"
        clipRule="evenodd"
      />
      <path fill={'var(--steel-10)'} d="M29.334 13.333a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path
        fill={'var(--steel-80)'}
        fillRule="evenodd"
        d="M21.324 4C16.172 4 12 8.181 12 13.333s4.172 9.334 9.324 9.334c5.162 0 9.343-4.182 9.343-9.334C30.667 8.181 26.486 4 21.324 4Zm.01 16.8a7.465 7.465 0 0 1-7.467-7.467 7.465 7.465 0 0 1 7.467-7.466 7.465 7.465 0 0 1 7.466 7.466 7.465 7.465 0 0 1-7.466 7.467ZM20.4 8.667h1.4v4.9l4.2 2.492-.7 1.148-4.9-2.94v-5.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsOverlySecuredLater32;

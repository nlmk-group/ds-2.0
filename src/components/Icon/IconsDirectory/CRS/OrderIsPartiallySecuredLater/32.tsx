import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsPartiallySecuredLater32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#F9BC2E'}
        d="M2.667 26.667V14h10l14.564 13.006c.914.815.337 2.327-.888 2.327H5.333a2.667 2.667 0 0 1-2.666-2.666Z"
      />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M5.334 10.667v15.999h21.333v-16h2.667v16a2.667 2.667 0 0 1-2.667 2.667H5.334a2.667 2.667 0 0 1-2.667-2.666v-16h2.667Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M26.667 16H5.334v-2.667h21.333V16Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M25.038 26.667 11.982 16h1.125l.688-2 12.872 10.528v2.139h-1.629Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || '#fff'} d="M29.334 13.333a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M21.324 4C16.172 4 12 8.181 12 13.333s4.172 9.334 9.324 9.334c5.162 0 9.343-4.182 9.343-9.334C30.667 8.181 26.486 4 21.324 4Zm.01 16.8a7.465 7.465 0 0 1-7.467-7.467 7.465 7.465 0 0 1 7.467-7.466 7.465 7.465 0 0 1 7.466 7.466 7.465 7.465 0 0 1-7.466 7.467ZM20.4 8.667h1.4v4.9l4.2 2.492-.7 1.148-4.9-2.94v-5.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsPartiallySecuredLater32;

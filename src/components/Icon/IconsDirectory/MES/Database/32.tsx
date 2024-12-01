import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDatabase32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16 4C10.106 4 5.333 6.387 5.333 9.333v13.334C5.333 25.613 10.12 28 16 28s10.666-2.387 10.666-5.333V9.333C26.666 6.387 21.893 4 16 4Zm8 18.667c0 .666-2.84 2.666-8 2.666s-8-2-8-2.666v-2.974c2.146 1.04 4.96 1.64 8 1.64s5.853-.6 8-1.64v2.974Zm0-6.067c-1.734 1.267-4.774 2.067-8 2.067-3.227 0-6.267-.8-8-2.067v-3.747c1.96 1.107 4.813 1.814 8 1.814 3.186 0 6.04-.707 8-1.814V16.6ZM16 12c-5.16 0-8-2-8-2.667 0-.666 2.84-2.666 8-2.666s8 2 8 2.666C24 10 21.16 12 16 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDatabase32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDarkModeFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12c0-.613-.053-1.227-.133-1.813A7.185 7.185 0 0 1 22 17.2a7.204 7.204 0 0 1-4.187-13.067C17.227 4.053 16.613 4 16 4Z"
      />
    </svg>
  );
};

export default IconDarkModeFilled32;

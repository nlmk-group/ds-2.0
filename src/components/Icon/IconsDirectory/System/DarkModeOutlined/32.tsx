import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDarkModeOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.493 7.347a9.8 9.8 0 0 0-.36 2.653c0 5.44 4.427 9.867 9.867 9.867a9.8 9.8 0 0 0 2.653-.36c-1.386 3.413-4.746 5.826-8.653 5.826-5.147 0-9.333-4.186-9.333-9.333 0-3.907 2.413-7.267 5.826-8.653ZM16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12c0-.613-.053-1.227-.133-1.813A7.185 7.185 0 0 1 22 17.2a7.204 7.204 0 0 1-4.187-13.067C17.227 4.053 16.613 4 16 4Z"
      />
    </svg>
  );
};

export default IconDarkModeOutlined32;

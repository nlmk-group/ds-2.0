import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLockOpenFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M23.667 11.333h-1.334V8.667A6.669 6.669 0 0 0 15.667 2 6.67 6.67 0 0 0 9 8.667h2.667c0-2.214 1.786-4 4-4 2.213 0 4 1.786 4 4v2.666h-12A2.675 2.675 0 0 0 5 14v13.333C5 28.8 6.2 30 7.667 30h16c1.466 0 2.666-1.2 2.666-2.667V14c0-1.467-1.2-2.667-2.666-2.667Zm-5.334 9.334c0 1.466-1.2 2.666-2.666 2.666A2.674 2.674 0 0 1 13 20.667C13 19.2 14.2 18 15.667 18c1.466 0 2.666 1.2 2.666 2.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLockOpenFilled32;

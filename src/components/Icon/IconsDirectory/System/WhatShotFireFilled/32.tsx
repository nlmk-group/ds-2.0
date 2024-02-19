import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWhatShotFireFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M19.08 7.751C19.08 4.727 18.063 1 18.063 1 23.439 5.402 27 12.167 27 19.748 27 25.965 22.078 31 16 31S5 25.965 5 19.748c0-4.754 1.664-9.128 4.441-12.503L9.4 7.75c0 2.897 2.145 5.246 4.991 5.246 2.833 0 4.689-2.349 4.689-5.246Zm-6.655 14.205c0-1.758 1.114-2.995 2.984-3.39 1.883-.393 3.822-1.307 4.908-2.812a15.11 15.11 0 0 1 .633 4.388c0 2.883-2.283 5.218-5.101 5.218a3.406 3.406 0 0 1-3.424-3.404Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWhatShotFireFilled32;

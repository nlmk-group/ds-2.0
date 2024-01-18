import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFire32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.08 7.75106C19.08 4.72715 18.0625 1 18.0625 1C23.4387 5.40225 27 12.1674 27 19.7482C27 25.9648 22.0775 31 16 31C9.9225 31 5 25.9648 5 19.7482C5 14.9944 6.66375 10.6203 9.44125 7.24473L9.4 7.75106C9.4 10.6484 11.545 12.9972 14.3912 12.9972C17.2238 12.9972 19.08 10.6484 19.08 7.75106ZM12.4249 21.9563C12.4249 20.1982 13.5387 18.9605 15.4087 18.5667C17.2924 18.1729 19.2312 17.2587 20.3174 15.7538C20.7437 17.1603 20.9499 18.637 20.9499 20.142C20.9499 23.0252 18.6674 25.36 15.8487 25.36C13.9512 25.36 12.4249 23.841 12.4249 21.9563Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatShotFire32;

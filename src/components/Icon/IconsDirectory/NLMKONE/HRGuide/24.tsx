import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHRGuide24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3.01 4a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v11.98a3 3 0 0 1-3 3H5.999c-.546 0-1 .451-1 1.01 0 .559.454 1.01 1 1.01h13.99a1 1 0 1 1 0 2H6a3.008 3.008 0 0 1-2.959-3.512h-.03V4Zm8.995 12.98H5.999c-.347 0-.68.06-.989.168V4a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v11.98a1 1 0 0 1-1 1h-5.995Zm-.01-11.56c.69 0 1.25.562 1.25 1.255 0 .694-.56 1.256-1.25 1.256s-1.25-.562-1.25-1.256c0-.693.56-1.256 1.25-1.256Zm1 3.516v6.03h-2v-6.03h2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHRGuide24;

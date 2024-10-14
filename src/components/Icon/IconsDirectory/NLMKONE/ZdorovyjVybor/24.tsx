import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZdorovyjVybor24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2.142 3h.284c2.866-.008 4.756-.25 5.912-.48.588-.118.985-.233 1.224-.312a3.838 3.838 0 0 0 .285-.107 1 1 0 0 1 .884 1.794l-.43-.86.43.86h-.002l-.002.002-.006.003-.012.006a1.898 1.898 0 0 1-.142.062 5.82 5.82 0 0 1-.373.137c-.323.108-.801.243-1.464.376-.848.17-2 .335-3.52.432.108.277.176.575.196.887l.234 3.5a3 3 0 0 1-2.994 3.2h-.724a3 3 0 0 1-2.993-3.2l.233-3.5c.02-.311.089-.61.197-.887-1.521-.097-2.673-.263-3.52-.432a12.273 12.273 0 0 1-1.465-.376 5.814 5.814 0 0 1-.514-.2L3.563 7.9l-.005-.002-.003-.001h-.001S3.553 7.894 4 7l-.447.895A1 1 0 0 1 4.437 6.1l.042.018c.044.018.124.049.244.089.239.08.636.194 1.223.312 1.157.23 3.046.472 5.912.48Zm.003 2a1 1 0 0 0-.988.933l-.233 3.5a1 1 0 0 0 .998 1.067h.724a1 1 0 0 0 .998-1.066l-.233-3.5A1 1 0 0 0 12.138 9a52.767 52.767 0 0 1-.277 0Zm1.975 8.014a1 1 0 0 1 1.15.822l.5 3a1 1 0 1 1-1.972.328l-.5-3a1 1 0 0 1 .822-1.15Zm-2.85 1.15a1 1 0 0 0-1.972-.328l-.5 3a1 1 0 0 0 1.973.328l.5-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZdorovyjVybor24;

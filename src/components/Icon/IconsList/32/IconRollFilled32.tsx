import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRollFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3243 16.0001C10.3243 12.8655 12.8654 10.3244 16 10.3244C19.1346 10.3244 21.6757 12.8655 21.6757 16.0001C21.6757 19.1347 19.1346 21.6757 16 21.6757C12.8654 21.6757 10.3243 19.1347 10.3243 16.0001ZM18.9189 16.0001C18.9189 17.6121 17.6121 18.919 16 18.919C14.3879 18.919 13.0811 17.6121 13.0811 16.0001C13.0811 14.388 14.3879 13.0812 16 13.0812C17.6121 13.0812 18.9189 14.388 18.9189 16.0001Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM16 9.0271C12.1489 9.0271 9.02704 12.149 9.02704 16.0001C9.02704 19.8511 12.1489 22.973 16 22.973C19.8511 22.973 22.973 19.8511 22.973 16.0001C22.973 12.149 19.8511 9.0271 16 9.0271Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRollFilled32;

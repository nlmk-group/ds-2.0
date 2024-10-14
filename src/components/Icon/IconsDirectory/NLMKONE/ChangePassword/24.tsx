import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChangePassword24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1.215 10.487c.422 1.575 1.347 2.774 2.774 3.597a5.71 5.71 0 0 0 3 .789 6.116 6.116 0 0 0 2.938-.787l2.398 1.383-1.484 2.567L15.981 21l1.483-2.567 2.57 1.482L23 14.781 12.893 8.952a6.1 6.1 0 0 0-.787-2.935 5.702 5.702 0 0 0-2.183-2.2c-1.427-.824-2.929-1.024-4.505-.603-1.576.422-2.776 1.346-3.6 2.772-.825 1.426-1.026 2.927-.603 4.501Zm6.533 2.329c-.904.248-1.828.1-2.77-.443-.942-.544-1.555-1.344-1.838-2.401-.284-1.057-.154-2.056.39-2.998.544-.94 1.345-1.553 2.404-1.836 1.058-.284 2.058-.154 3 .39.942.543 1.532 1.268 1.77 2.175.237.907.252 1.672.044 2.294l9.55 5.508-.989 1.71-2.57-1.481-1.483 2.567-1.713-.988 1.484-2.567-5.268-3.038c-.435.49-1.106.86-2.01 1.108Zm-.715-5.397a1.483 1.483 0 1 0-.002 2.965 1.483 1.483 0 0 0 .002-2.965Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChangePassword24;

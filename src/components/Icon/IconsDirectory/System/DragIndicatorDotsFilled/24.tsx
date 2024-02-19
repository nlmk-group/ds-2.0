import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDragIndicatorDotsFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.86 2C7.293 2 6 3.263 6 4.826 6 6.39 7.293 7.652 8.86 7.652s2.86-1.263 2.86-2.826C11.72 3.263 10.427 2 8.86 2Zm7.28 0c-1.567 0-2.86 1.263-2.86 2.826 0 1.563 1.293 2.826 2.86 2.826S19 6.39 19 4.826C19 3.263 17.707 2 16.14 2ZM8.86 9.174C7.293 9.174 6 10.437 6 12c0 1.563 1.293 2.826 2.86 2.826s2.86-1.263 2.86-2.826c0-1.563-1.293-2.826-2.86-2.826Zm7.28 0c-1.567 0-2.86 1.263-2.86 2.826 0 1.563 1.293 2.826 2.86 2.826S19 13.563 19 12c0-1.563-1.293-2.826-2.86-2.826Zm-7.28 7.174C7.293 16.348 6 17.61 6 19.174 6 20.737 7.293 22 8.86 22s2.86-1.263 2.86-2.826c0-1.563-1.293-2.826-2.86-2.826Zm7.28 0c-1.567 0-2.86 1.263-2.86 2.826 0 1.563 1.293 2.826 2.86 2.826S19 20.737 19 19.174c0-1.563-1.293-2.826-2.86-2.826Z"
      />
    </svg>
  );
};

export default IconDragIndicatorDotsFilled24;

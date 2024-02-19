import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M.787 8a7.336 7.336 0 0 1 14.426 0A7.336 7.336 0 0 1 .787 8ZM8 11.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666ZM6 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconEyeFilled16;

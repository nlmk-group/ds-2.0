import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalyticsFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.85 4.054C8.762 4.634 4 9.761 4 16c0 6.628 5.373 12 12 12 6.24 0 11.367-4.762 11.946-10.85H14.85V4.054Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M27.946 14.85C27.403 9.14 22.859 4.597 17.15 4.054V14.85h10.796Z" />
    </svg>
  );
};

export default IconAnalyticsFilled32;

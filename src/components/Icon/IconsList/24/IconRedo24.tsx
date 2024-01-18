import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconRedo24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.7349 8.5C14.3849 8.5 16.7849 9.49 18.6349 11.1L22.2349 7.5V16.5H13.2349L16.8549 12.88C15.4649 11.72 13.6949 11 11.7349 11C8.19489 11 5.18489 13.31 4.13489 16.5L1.76489 15.72C3.15489 11.53 7.08489 8.5 11.7349 8.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRedo24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAddComment32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.9999 18.667H17.0002V14.3332H21.334V12.3329H17.0002V7.99904H14.9999V12.3329H10.666V14.3332H14.9999V18.667ZM2.66504 29.335V4.66529C2.66504 4.15411 2.86506 3.69295 3.26511 3.28178C3.66516 2.87062 4.13189 2.66504 4.66529 2.66504H27.3348C27.846 2.66504 28.3071 2.87062 28.7183 3.28178C29.1295 3.69295 29.335 4.15411 29.335 4.66529V22.0008C29.335 22.512 29.1295 22.9731 28.7183 23.3843C28.3071 23.7955 27.846 24.001 27.3348 24.001H7.99904L2.66504 29.335ZM4.66529 24.5011L7.1656 22.0008H27.3348V4.66529H4.66529V24.5011ZM4.66529 4.66529V24.5011V4.66529Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAddComment32;

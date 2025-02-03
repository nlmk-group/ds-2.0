import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSplittingAnOperation32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M24.637 16 31 22l-6.363 6v-4.5h-4.54v-3h4.54V16ZM7.363 4 1 10l6.363 6v-4.5h4.54v-3h-4.54V4ZM14.432 4h3.136v24h-3.136V4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSplittingAnOperation32;

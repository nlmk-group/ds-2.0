import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowBottom16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8.686 10.781 3.678-3.576.97.943L8 13.333 2.667 8.148l.97-.943 3.677 3.576V2.667h1.372v8.114Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M1.333 12.667h13.334V14H1.333v-1.333Z" />
    </svg>
  );
};

export default IconArrowBottom16;

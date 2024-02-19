import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconGreaterOrEqual32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 27.996h16.57v-2.761H8v2.761ZM8 24l18-9L8 6v3.305L19.39 15 8 20.695V24Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconGreaterOrEqual32;

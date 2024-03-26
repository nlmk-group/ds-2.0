import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChannel16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.333 10.667a2 2 0 0 0-1.153.373L8.667 8.667V5.213a2 2 0 1 0-1.334 0v3.454L3.82 11.04a2 2 0 0 0-1.153-.373 2 2 0 1 0 2 2 2 2 0 0 0-.08-.534L8 9.843l3.413 2.29a2 2 0 1 0 1.92-1.466ZM2.667 13.333a.666.666 0 1 1 0-1.332.666.666 0 0 1 0 1.332ZM8 2.667A.667.667 0 1 1 8 4a.667.667 0 0 1 0-1.333Zm0 7.177V9v.844Zm5.333 3.49a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.333Z"
      />
    </svg>
  );
};

export default IconChannel16;

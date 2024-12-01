import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextFields32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M17.874 8v16h-2.793V8h2.793ZM23 8v2.198H10V8h13Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconTextFields32;

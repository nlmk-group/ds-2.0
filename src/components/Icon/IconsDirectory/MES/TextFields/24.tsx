import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTextFields24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M13.874 4v16h-2.793V4h2.793ZM19 4v2.198H6V4h13Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconTextFields24;

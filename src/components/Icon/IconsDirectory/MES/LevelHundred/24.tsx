import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLevelHundred24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 7.58172 3.58172 4 8 4H16C20.4183 4 24 7.58172 24 12C24 16.4183 20.4183 20 16 20H8C3.58172 20 0 16.4183 0 12Z"
        fill={htmlColor || '#EEA601'}
      />
    </svg>
  );
};

export default IconLevelHundred24;

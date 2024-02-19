import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBlockCloseFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 1C7.748 1 1 7.748 1 16c0 8.252 6.748 15 15 15 8.252 0 15-6.748 15-15 0-8.252-6.748-15-15-15ZM5.8 16c0-5.608 4.592-10.2 10.2-10.2 1.908 0 3.726.528 5.312 1.514L7.314 21.312A10.006 10.006 0 0 1 5.8 16ZM16 26.2c-1.908 0-3.726-.528-5.312-1.514L24.686 10.69A10.006 10.006 0 0 1 26.2 16c0 5.608-4.592 10.2-10.2 10.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBlockCloseFilled32;

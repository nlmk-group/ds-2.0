import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPennantOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M16 24.9091L24 30V2H8V30L16 24.9091ZM10.9091 24.7921L16 21.5524L21.0909 24.7921V4.8H10.9091V24.7921Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPennantOutlined32;

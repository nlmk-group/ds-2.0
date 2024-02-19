import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArticleOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M7 17h7v-2H7v2Zm0-4h10v-2H7v2Zm0-4h10V7H7v2Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm14 16V5H5v14h14Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArticleOutlined24;

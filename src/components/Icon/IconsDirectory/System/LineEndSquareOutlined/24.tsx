import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLineEndSquareOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M13 15.5h7v-7h-7v7Zm-2 2V13H2v-2h9V6.5h11v11H11Z" />
    </svg>
  );
};

export default IconLineEndSquareOutlined24;

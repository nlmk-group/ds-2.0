import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMatrixOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = styles[color as keyof typeof styles];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 4.545A2.545 2.545 0 0 1 4.545 2h22.91A2.545 2.545 0 0 1 30 4.545v22.91A2.545 2.545 0 0 1 27.454 30H4.546A2.545 2.545 0 0 1 2 27.454V4.546Zm17.054 0h-5.981v5.918h5.981V4.545Zm2.546 0v5.918h5.854V4.545H21.6Zm-2.546 8.464h-5.981v5.982h5.981v-5.982Zm2.546 5.982v-5.982h5.854v5.982H21.6Zm-2.546 2.546h-5.981v5.918h5.981v-5.918Zm2.546 5.918v-5.918h5.854v5.918H21.6ZM4.545 4.544h5.982v5.918H4.545V4.545Zm0 8.464h5.982v5.982H4.545v-5.982Zm0 8.527h5.982v5.918H4.545v-5.918Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconMatrixOutlined32;

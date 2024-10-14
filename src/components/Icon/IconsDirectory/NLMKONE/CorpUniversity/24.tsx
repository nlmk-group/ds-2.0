import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCorpUniversity24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.993 2.266a2 2 0 0 0-1.986 0L2.503 7.132A1 1 0 0 0 3 9h18a1 1 0 0 0 .497-1.868l-8.504-4.866ZM12 4.002 17.24 7H6.76L12 4.002ZM5 17v1h2v-7H5v6Zm-2 3H2v2h20v-2H3Zm6-2v-7h2v7H9Zm8-1v1h2v-7h-2v6Zm-4 1v-7h2v7h-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCorpUniversity24;

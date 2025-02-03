import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKey24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8 17a5.007 5.007 0 0 0 4.898-4H15v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 8 7c-2.757 0-5 2.243-5 5s2.243 5 5 5Zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKey24;

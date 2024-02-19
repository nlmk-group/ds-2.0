import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHomeOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m16.118 7.798 7.059 6.353v11.026h-2.824v-8.471h-8.47v8.47H9.058V14.152l7.059-6.353Zm0-3.798L2 16.706h4.235V28h8.47v-8.47h2.824V28H26V16.706h4.235L16.118 4Z"
      />
    </svg>
  );
};

export default IconHomeOutlined32;

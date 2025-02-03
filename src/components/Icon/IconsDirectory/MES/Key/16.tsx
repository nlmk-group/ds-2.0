import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKey16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M5.421 11.667c1.652 0 3.035-1.205 3.351-2.8h1.438v1.4h1.369v-1.4h1.368v2.1h1.369v-2.1H15v-1.4H8.772c-.316-1.596-1.7-2.8-3.351-2.8C3.535 4.667 2 6.237 2 8.167s1.535 3.5 3.421 3.5Zm0-5.6c1.132 0 2.053.942 2.053 2.1 0 1.157-.921 2.1-2.053 2.1s-2.053-.943-2.053-2.1c0-1.158.921-2.1 2.053-2.1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKey16;

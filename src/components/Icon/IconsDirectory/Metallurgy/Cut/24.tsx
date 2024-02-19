import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCut24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.474 3.419a.75.75 0 0 1 .107 1.055l-5.613 6.882 2.021 2.478a3.75 3.75 0 1 1-1.083 1.046L12 12.543l-1.906 2.337a3.75 3.75 0 1 1-1.083-1.046l2.021-2.478L5.42 4.474a.75.75 0 0 1 1.162-.948L12 10.169l5.419-6.643a.75.75 0 0 1 1.055-.107ZM4.75 17a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm10 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCut24;

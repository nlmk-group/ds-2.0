import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNewsOrder24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 5h8v2h-8V5Zm0 4h8v2h-8V9Zm8 4H3v2h18v-2ZM3 17h18v2H3v-2ZM4 5H3v6h8V5H4Zm1 4V7h4v2H5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNewsOrder24;

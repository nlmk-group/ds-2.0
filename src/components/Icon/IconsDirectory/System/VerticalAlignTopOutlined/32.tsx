import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVerticalAlignTopOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.111V2h25v3.111H4Zm10.937 9.333H10.25l6.25-6.222 6.25 6.222h-4.688V30h-3.125V14.444Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVerticalAlignTopOutlined32;

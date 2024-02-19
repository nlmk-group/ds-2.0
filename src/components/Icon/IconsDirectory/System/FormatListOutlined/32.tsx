import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.667 5.333H28V8H10.667V5.333ZM4 4.667h4v4H4v-4ZM4 14h4v4H4v-4Zm0 9.333h4v4H4v-4Zm6.667-8.666H28v2.666H10.667v-2.666Zm0 9.333H28v2.667H10.667V24Z"
      />
    </svg>
  );
};

export default IconFormatListOutlined32;

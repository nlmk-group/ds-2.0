import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 5h12v2H2V5Zm0 4h12v2H2V9Zm16 0h-2v4h-4v2h4v4h2v-4h4v-2h-4V9Zm-8 6H2v-2h8v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuOutlined24;

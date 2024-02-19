import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLogoBrandJiraOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M28.83 2H15.348a6.086 6.086 0 0 0 6.087 6.087h2.484v2.398A6.087 6.087 0 0 0 30 16.567V3.17A1.17 1.17 0 0 0 28.83 2Zm-6.67 6.718H8.675a6.087 6.087 0 0 0 6.083 6.083h2.484v2.406a6.087 6.087 0 0 0 6.086 6.079V9.888a1.17 1.17 0 0 0-1.17-1.17ZM2 15.433h13.483c.646 0 1.17.523 1.17 1.17V30a6.087 6.087 0 0 1-6.075-6.083V21.52H8.087A6.087 6.087 0 0 1 2 15.433Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconLogoBrandJiraOutlined32;

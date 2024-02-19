import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C4.691 2 2 4.691 2 8v5.024c0 .539.437.976.975.976h10.05a.976.976 0 0 0 .975-.976V8c0-3.309-2.691-6-6-6ZM2.97 8A5.035 5.035 0 0 1 8 2.97 5.035 5.035 0 0 1 13.03 8v5.025l-.001.001-.001.002h-.002v.001h-1.232v-2.21a.485.485 0 0 0-.485-.486h-1.23V7.877a.485.485 0 0 0-.486-.485H6.407a.485.485 0 0 0-.485.485v2.456h-1.23a.485.485 0 0 0-.486.486v2.21H2.975l-.003-.001a.007.007 0 0 1-.001-.003V8Zm3.922 2.333v-1.97h.623v.25a.485.485 0 0 0 .97 0v-.25h.623v1.97H6.892ZM5.176 13.03v-1.725h.746v.25a.485.485 0 0 0 .97 0v-.25h.623v1.725H5.176Zm3.31 0v-1.725h.622v.25a.485.485 0 0 0 .97 0v-.25h.745v1.725H8.485Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerOutlined16;

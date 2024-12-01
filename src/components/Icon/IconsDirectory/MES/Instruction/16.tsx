import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInstruction16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14.777 1.128a.59.59 0 0 1 .223.463v10.34a.59.59 0 0 1-.604.592H14.255a16.092 16.092 0 0 0-1.917.151c-1.217.17-2.738.525-4.05 1.252a.592.592 0 0 1-.879-.517V3.07c0-.276.19-.515.459-.577l6.408-1.477c.176-.04.36.001.502.113Zm-.96 10.224V2.334L8.592 3.538v8.925c1.245-.536 2.542-.814 3.58-.96.648-.09 1.206-.131 1.602-.149l.043-.002Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M1.223 1.129A.59.59 0 0 0 1 1.59v10.34a.59.59 0 0 0 .604.592H1.746a16.123 16.123 0 0 1 1.917.151c1.217.17 2.738.525 4.05 1.252a.592.592 0 0 0 .879-.517V3.07a.591.591 0 0 0-.459-.577L1.725 1.015a.592.592 0 0 0-.502.114Zm.96 10.223V2.334l5.225 1.204v8.925c-1.245-.536-2.542-.814-3.58-.96a17.283 17.283 0 0 0-1.602-.149l-.043-.002Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M2.983 4.43a.592.592 0 0 1 .696-.464l2.465.492a.59.59 0 1 1-.232 1.16l-2.465-.493a.59.59 0 0 1-.464-.695ZM13.017 4.43a.592.592 0 0 0-.696-.464l-2.465.492a.59.59 0 1 0 .232 1.16l2.465-.493a.59.59 0 0 0 .464-.695ZM2.983 6.892a.592.592 0 0 1 .696-.464l2.465.493a.59.59 0 1 1-.232 1.158l-2.465-.492a.59.59 0 0 1-.464-.695ZM13.017 6.892a.592.592 0 0 0-.696-.464l-2.465.493a.59.59 0 1 0 .232 1.158l2.465-.492a.59.59 0 0 0 .464-.695ZM2.983 9.354a.592.592 0 0 1 .696-.464l2.465.493a.59.59 0 1 1-.232 1.159l-2.465-.493a.59.59 0 0 1-.464-.695ZM13.017 9.354a.592.592 0 0 0-.696-.464l-2.465.493a.59.59 0 1 0 .232 1.159l2.465-.493a.59.59 0 0 0 .464-.695Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInstruction16;

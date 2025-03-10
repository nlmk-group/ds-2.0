import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsNotSecured16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);

  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || '#3C4A56'}
        fillRule="evenodd"
        d="M2.633 4v7.714h10.4V4h1.3v7.714c0 .71-.582 1.286-1.3 1.286h-10.4c-.718 0-1.3-.576-1.3-1.286V4h1.3Z"
        clipRule="evenodd"
      />
      <path fill={'#F76979'} d="M7.183 4h1.3v4.5h-1.3V4ZM7.183 9.143h1.3v1.286h-1.3V9.143Z" />
      <path
        fill={'#F76979'}
        fillRule="evenodd"
        d="M7.183 4v4.5h1.3V4h-1.3Zm0 5.143v1.286h1.3V9.143h-1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconOrderIsNotSecured16;

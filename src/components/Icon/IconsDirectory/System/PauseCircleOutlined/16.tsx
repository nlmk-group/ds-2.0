import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPauseCircleOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M7 11H5.6V5H7v6Zm3.4 0H9V5h1.4v6Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 1c3.864 0 7 3.136 7 7s-3.136 7-7 7-7-3.136-7-7 3.136-7 7-7Zm0 1.4A5.607 5.607 0 0 0 2.4 8c0 3.087 2.513 5.6 5.6 5.6 3.087 0 5.6-2.513 5.6-5.6 0-3.087-2.513-5.6-5.6-5.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPauseCircleOutlined16;

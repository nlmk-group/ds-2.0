import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMoreHorizDotsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 11c-.825 0-1.5.675-1.5 1.5S3.675 14 4.5 14 6 13.325 6 12.5 5.325 11 4.5 11Zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5Zm-9 1.5c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5S12.825 14 12 14s-1.5-.675-1.5-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMoreHorizDotsOutlined24;

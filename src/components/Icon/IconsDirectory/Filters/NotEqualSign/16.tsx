import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotEqualSign16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12.953 12.953 1l1.156 1.156-2.507 2.507H15v1.635H9.967L7.025 9.24H15v1.635H5.39L2.156 14.11 1 12.953ZM4.222 9.24h-2.3v1.635h.666L4.222 9.24Zm-2.3-4.577H8.8L7.165 6.298H1.922V4.663Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNotEqualSign16;

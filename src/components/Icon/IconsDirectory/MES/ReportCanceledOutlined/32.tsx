import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCanceledOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.087a2.497 2.497 0 0 1 2.163-1.25h1.25c0-.829 1.12-1.5 2.5-1.5s2.5.671 2.5 1.5h1.25A2.497 2.497 0 0 1 21.913 4H26a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2Zm-.25-23.75h-3.71a2.5 2.5 0 0 1-2.29 1.5h-7.5a2.5 2.5 0 0 1-2.29-1.5H6.25v21.5h19.5V6.25Zm-13.859 5.873L16 16.233l4.109-4.11 1.767 1.768L17.768 18l4.108 4.109-1.767 1.767L16 19.768l-4.109 4.108-1.768-1.767L14.233 18l-4.11-4.109 1.768-1.768Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCanceledOutlined32;

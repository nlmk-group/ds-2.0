import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEditPenOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m18.37 3.29 2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83-3.75-3.75 1.83-1.83c.19-.19.44-.29.7-.29.26 0 .51.09.71.29ZM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconEditPenOutlined24;

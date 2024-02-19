import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m20.5 3.5-.16.03L15 5.6 9.107 3.5 3.36 5.4c-.21.07-.36.25-.36.48V21c0 .28.22.5.5.5l.16-.03 5.447-2.07L15 21.5l5.64-1.9c.21-.07.36-.25.36-.48V4c0-.28-.22-.5-.5-.5ZM10 5.4l4.25 1.535V19.4L10 17.964V5.4ZM4.607 6.714 8.464 5.4v12.564L4.607 19.4V6.714Zm14.786 11.572L15.857 19.4V7.036l3.536-1.286v12.536Z"
      />
    </svg>
  );
};

export default IconMapOutlined24;

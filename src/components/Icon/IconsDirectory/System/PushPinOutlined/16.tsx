import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPushPinOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9.429 2.4v3.5c0 .784.264 1.512.714 2.1H5.857c.464-.602.714-1.33.714-2.1V2.4H9.43ZM11.57 1H4.43a.71.71 0 0 0-.715.7c0 .385.322.7.715.7h.714v3.5C5.143 7.062 4.186 8 3 8v1.4h4.264v4.9l.715.7.714-.7V9.4H13V8c-1.186 0-2.143-.938-2.143-2.1V2.4h.714a.71.71 0 0 0 .715-.7.71.71 0 0 0-.715-.7Z"
      />
    </svg>
  );
};

export default IconPushPinOutlined16;

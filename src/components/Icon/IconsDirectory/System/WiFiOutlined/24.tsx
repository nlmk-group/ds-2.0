import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWiFiOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1 8.683 2 2.058c4.97-5.113 13.03-5.113 18 0l2-2.058c-6.07-6.244-15.92-6.244-22 0Zm8 8.23L12 20l3-3.086a4.154 4.154 0 0 0-6 0Zm-2-2.057L5 12.8c3.87-3.972 10.14-3.972 14 0l-2 2.057a6.935 6.935 0 0 0-10 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWiFiOutlined24;

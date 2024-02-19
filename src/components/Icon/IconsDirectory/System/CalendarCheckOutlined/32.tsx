import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.4 6.4V4H10v2.4H5.2A1.2 1.2 0 0 0 4 7.6v19.2A1.2 1.2 0 0 0 5.2 28h21.6a1.2 1.2 0 0 0 1.2-1.2V7.6a1.2 1.2 0 0 0-1.2-1.2H22V4h-2.4v2.4h-7.2Zm-6 8.4h19.2v10.8H6.4V14.8Zm13.243 1.363-4.242 4.243-2.545-2.546-1.7 1.697L15.4 23.8l5.94-5.94-1.696-1.696h-.001ZM6.4 8.8H10V10h2.4V8.8h7.2V10H22V8.8h3.6v3.6H6.4V8.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckOutlined32;

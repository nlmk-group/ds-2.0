import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.008 12.5 23 19.767 20.847 22l-9.16-9.5 9.16-9.5L23 5.232 16.008 12.5Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m5.32 12.5 6.993 7.267L10.16 22 1 12.5 10.16 3l2.153 2.232L5.32 12.5Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronOutlined24;

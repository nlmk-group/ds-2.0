import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M7.992 12.5 1 5.232 3.153 3l9.16 9.5-9.16 9.5L1 19.767 7.992 12.5Z" />
      <path
        fill={htmlColor || 'currentColor'}
        d="m18.68 12.5-6.993-7.268L13.84 3 23 12.5 13.84 22l-2.153-2.233L18.68 12.5Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronOutlined24;

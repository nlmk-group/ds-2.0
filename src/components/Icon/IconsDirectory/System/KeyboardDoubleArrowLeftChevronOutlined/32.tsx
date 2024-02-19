import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="m21.1 16 8.9 9.18L27.26 28 15.602 16 27.26 4 30 6.82 21.1 16Z" />
      <path fill={htmlColor || 'currentColor'} d="m7.499 16 8.9 9.18-2.74 2.82-11.66-12L13.66 4l2.74 2.82L7.5 16Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronOutlined32;

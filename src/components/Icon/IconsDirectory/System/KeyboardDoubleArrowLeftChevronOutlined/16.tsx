import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M10.55 8 15 12.59 13.63 14 7.8 8l5.83-6L15 3.41 10.55 8Z" />
      <path fill={htmlColor || 'currentColor'} d="m3.75 8 4.45 4.59L6.83 14 1 8l5.83-6L8.2 3.41 3.75 8Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronOutlined16;

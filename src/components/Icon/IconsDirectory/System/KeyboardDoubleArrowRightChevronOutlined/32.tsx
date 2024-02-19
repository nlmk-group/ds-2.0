import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M10.9 16 2 6.82 4.74 4l11.658 12L4.74 28 2 25.18 10.9 16Z" />
      <path fill={htmlColor || 'currentColor'} d="m24.501 16-8.9-9.18L18.342 4l11.66 12-11.66 12-2.74-2.82 8.9-9.18Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronOutlined32;

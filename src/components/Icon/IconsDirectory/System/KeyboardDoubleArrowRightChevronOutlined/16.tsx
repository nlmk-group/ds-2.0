import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M5.45 8 1 3.41 2.37 2 8.2 8l-5.83 6L1 12.59 5.45 8Z" />
      <path fill={htmlColor || 'currentColor'} d="M12.25 8 7.8 3.41 9.17 2 15 8l-5.83 6-1.37-1.41L12.25 8Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronOutlined16;

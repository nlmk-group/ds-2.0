import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="m2 12 8.515 9 2.859-3.021L7.729 12l5.645-5.979L10.515 3 2 12Z" />
      <path fill={htmlColor || 'currentColor'} d="m10.626 12 8.516 9L22 17.979 16.355 12 22 6.021 19.142 3l-8.516 9Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronFilled24;

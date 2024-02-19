import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="m22 12-8.515-9-2.859 3.021L16.271 12l-5.645 5.979L13.485 21 22 12Z" />
      <path fill={htmlColor || 'currentColor'} d="M13.374 12 4.858 3 2 6.021 7.645 12 2 17.979 4.858 21l8.516-9Z" />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronFilled24;

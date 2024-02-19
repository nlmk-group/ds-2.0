import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowRightChevronFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.697 8 9.171 1.282 7.104 3.41 11.554 8l-4.45 4.59 2.067 2.127L15.697 8Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.896 8 2.37 1.282.303 3.41 4.753 8l-4.45 4.59 2.067 2.127L8.896 8Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowRightChevronFilled16;

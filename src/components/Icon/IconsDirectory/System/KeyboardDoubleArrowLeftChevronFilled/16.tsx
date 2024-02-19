import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m.303 8 6.526 6.717 2.067-2.127L4.446 8l4.45-4.59-2.067-2.128L.303 8Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m7.104 8 6.526 6.717 2.067-2.127L11.247 8l4.45-4.59-2.067-2.128L7.104 8Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronFilled16;

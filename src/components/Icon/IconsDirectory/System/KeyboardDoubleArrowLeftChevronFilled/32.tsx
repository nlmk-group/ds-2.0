import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKeyboardDoubleArrowLeftChevronFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m.606 16 13.053 13.435 4.133-4.254L8.892 16l8.9-9.18-4.134-4.255L.607 16Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.207 16 27.26 29.435l4.134-4.254-8.9-9.181 8.9-9.18-4.134-4.255L14.207 16Z"
      />
    </svg>
  );
};

export default IconKeyboardDoubleArrowLeftChevronFilled32;

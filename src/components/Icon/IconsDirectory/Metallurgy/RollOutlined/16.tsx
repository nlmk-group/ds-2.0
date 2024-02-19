import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRollOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 3.297a4.703 4.703 0 1 0 0 9.406 4.703 4.703 0 0 0 0-9.406ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 5.162a2.838 2.838 0 1 0 0 5.676 2.838 2.838 0 0 0 0-5.676ZM4.514 8a3.486 3.486 0 1 1 6.973 0 3.486 3.486 0 0 1-6.973 0Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M8 9.46a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92Z" />
    </svg>
  );
};

export default IconRollOutlined16;

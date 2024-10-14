import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M9.875 5.5 9 6.375S7.375 4.74 7.375 4.75a3.685 3.685 0 0 1 1.08-2.632 3.835 3.835 0 0 1 4.745-.533l-2.264 2.26.225.975.977.225 2.265-2.26a3.816 3.816 0 0 1-.534 4.737c-.328.328-1.244.728-1.244.728L9.875 5.5ZM8.873 8.28l.9-.9 4.914 4.912a1.061 1.061 0 0 1 0 1.5l-.9.898a1.06 1.06 0 0 1-1.499 0L7.374 9.777l.882-.882-4.14-4.139-1.424.26L1.01 2.883l1.849-1.849 2.135 1.683-.26 1.424L8.872 8.28ZM5.375 8l1 1-.875.875 1.5 1.5-3.283 3.277a1.065 1.065 0 0 1-1.504 0l-.903-.9c-.415-.415-.475-1.212-.06-1.627L5.375 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInRepairFilled16;

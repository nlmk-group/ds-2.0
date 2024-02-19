import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftDownOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.69 2H14a1 1 0 1 1 0 2h-2.267c-1.137 0-1.928 0-2.543.053-.603.05-.947.145-1.207.282a3.065 3.065 0 0 0-1.317 1.36c-.138.28-.232.646-.281 1.275-.05.639-.052 1.459-.052 2.63v1.932L7.95 9.866a1 1 0 0 1 1.436 1.393L6.05 14.696a1 1 0 0 1-1.436 0L1.282 11.26a1 1 0 1 1 1.436-1.393l1.615 1.666V9.558c0-1.12 0-2.019.058-2.746.06-.748.184-1.4.482-2.003a5.065 5.065 0 0 1 2.18-2.245c.594-.312 1.238-.443 1.97-.504C9.73 2 10.606 2 11.688 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowLeftDownOutlined16;

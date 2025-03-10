import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMathOperatorsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.5 14H4v-2H2v-1.5h2v-2h1.5v2h2V12h-2v2ZM14 13.25H9v-1.5h5v1.5ZM14 10.75H9v-1.5h5v1.5ZM11.5 5.55l-1.4 1.4L9.05 5.9l1.4-1.45-1.4-1.4L10.1 2l1.4 1.4L12.9 2l1.05 1.05-1.4 1.4 1.4 1.45-1.05 1.05-1.4-1.4ZM7.25 5.2h-5V3.7h5v1.5Z"
      />
    </svg>
  );
};

export default IconMathOperatorsOutlined16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMathOperatorsOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11 28H8v-4H4v-3h4v-4h3v4h4v3h-4v4ZM28 26.5H18v-3h10v3ZM28 21.5H18v-3h10v3ZM23 11.1l-2.8 2.8-2.1-2.1 2.8-2.9-2.8-2.8L20.2 4 23 6.8 25.8 4l2.1 2.1-2.8 2.8 2.8 2.9-2.1 2.1-2.8-2.8ZM14.5 10.4h-10v-3h10v3Z"
      />
    </svg>
  );
};

export default IconMathOperatorsOutlined32;

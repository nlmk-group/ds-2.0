import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMathOperatorsOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.25 21H6v-3H3v-2.25h3v-3h2.25v3h3V18h-3v3ZM21 19.875h-7.5v-2.25H21v2.25ZM21 16.125h-7.5v-2.25H21v2.25ZM17.25 8.325l-2.1 2.1-1.575-1.575 2.1-2.175-2.1-2.1L15.15 3l2.1 2.1 2.1-2.1 1.575 1.575-2.1 2.1 2.1 2.175-1.575 1.575-2.1-2.1ZM10.875 7.8h-7.5V5.55h7.5V7.8Z"
      />
    </svg>
  );
};

export default IconMathOperatorsOutlined24;

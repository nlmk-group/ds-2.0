import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKPEFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.55 4.379v-1.58a5.85 5.85 0 0 0-3.389 1.474l1.12 1.12a.45.45 0 1 1-.636.636L3.538 4.923A5.848 5.848 0 0 0 2.21 8.387h1.541a.45.45 0 0 1 0 .9H2.24c.136 1.26.67 2.4 1.473 3.292l.933-.933a.45.45 0 0 1 .636.636l-.607.607h6.652l-.607-.606a.45.45 0 1 1 .636-.637l1.015 1.015a5.853 5.853 0 0 0 1.549-3.374h-1.67a.45.45 0 0 1 0-.9h1.698a5.848 5.848 0 0 0-1.4-3.55l-1.192 1.192a.45.45 0 1 1-.636-.636l1.194-1.194A5.849 5.849 0 0 0 8.45 2.787V4.38a.45.45 0 0 1-.9 0Zm1.601 5.87c.22-.453.168-1.029-.151-1.49a.667.667 0 0 0-.13-.136l.854-2.231a.447.447 0 0 0-.242-.585.433.433 0 0 0-.572.253l-.862 2.25h-.04c-.488 0-.926.283-1.144.732-.23.471-.168 1.029.151 1.488.11.158.28.27.455.342.176.072.368.108.537.108.488 0 .926-.283 1.144-.732Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconKPEFilled16;

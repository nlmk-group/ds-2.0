import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2.5h20v6h-2v7h2v6h-6v-6h2v-7H6v7h2v6H2v-6h2v-7H2v-6Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} fillRule="evenodd" d="M15 10.5H9v6h6v-6Z" clipRule="evenodd" />
    </svg>
  );
};

export default IconMnemoFilled24;

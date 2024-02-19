import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMnemoFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 2.3h12v3.6h-1.2v4.2H14v3.6h-3.6v-3.6h1.2V5.9H4.4v4.2h1.2v3.6H2v-3.6h1.2V5.9H2V2.3Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} fillRule="evenodd" d="M9.8 7.1H6.2v3.6h3.6V7.1Z" clipRule="evenodd" />
    </svg>
  );
};

export default IconMnemoFilled16;

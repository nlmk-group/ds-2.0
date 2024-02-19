import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMenuBurgerFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M30.5 6.5h-29v4h29v-4Zm0 7.5h-29v4h29v-4Zm0 7.5h-29v4h29v-4Z" />
    </svg>
  );
};

export default IconMenuBurgerFilled32;

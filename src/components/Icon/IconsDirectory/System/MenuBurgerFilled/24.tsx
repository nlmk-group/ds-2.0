import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMenuBurgerFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M21.5 5.5h-19v3h19v-3Zm0 5h-19v3h19v-3Zm0 5h-19v3h19v-3Z" />
    </svg>
  );
};

export default IconMenuBurgerFilled24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddPlusFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 1.5c-.75 0-1.357.608-1.357 1.357v3.286a.5.5 0 0 1-.5.5H2.857a1.357 1.357 0 1 0 0 2.714h3.286a.5.5 0 0 1 .5.5v3.286a1.357 1.357 0 0 0 2.714 0V9.857a.5.5 0 0 1 .5-.5h3.286a1.357 1.357 0 0 0 0-2.714H9.857a.5.5 0 0 1-.5-.5V2.857C9.357 2.107 8.75 1.5 8 1.5Z"
      />
    </svg>
  );
};

export default IconAddPlusFilled16;

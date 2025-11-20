import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

export const IconCombineFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1 2.4A1.4 1.4 0 0 1 2.4 1h7.7a1.4 1.4 0 0 1 1.4 1.4v.7H4a.9.9 0 0 0-.9.9v7.5h-.7A1.4 1.4 0 0 1 1 10.1V2.4Zm3.5 10.5v.7A1.4 1.4 0 0 0 5.9 15h7.7a1.4 1.4 0 0 0 1.4-1.4V5.9a1.4 1.4 0 0 0-1.4-1.4h-.7V12a.9.9 0 0 1-.9.9H4.5Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M4.5 11.5v-7h7v7h-7Z" />
    </svg>
  );
};

export default IconCombineFilled16;

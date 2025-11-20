import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCombineFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 4.8A2.8 2.8 0 0 1 4.8 2h15.4A2.8 2.8 0 0 1 23 4.8v1.4H8A1.8 1.8 0 0 0 6.2 8v15H4.8A2.8 2.8 0 0 1 2 20.2V4.8Zm7 21v1.4a2.8 2.8 0 0 0 2.8 2.8h15.4a2.8 2.8 0 0 0 2.8-2.8V11.8A2.8 2.8 0 0 0 27.2 9h-1.4v15a1.8 1.8 0 0 1-1.8 1.8H9Z"
      />
      <path fill={htmlColor || 'currentColor'} d="M9 23V9h14v14H9Z" />
    </svg>
  );
};

export default IconCombineFilled32;

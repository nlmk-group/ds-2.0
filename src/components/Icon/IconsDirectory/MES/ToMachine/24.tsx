// 24x24
import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToMachine24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M20 21H15a2 2 0 0 1-2-2V15h2v4h5V5h-5v4h-2V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-12-8H1v-2h7V8l4 4-4 4v-3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToMachine24;

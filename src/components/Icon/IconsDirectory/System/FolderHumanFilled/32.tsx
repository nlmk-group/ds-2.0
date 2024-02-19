import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderHumanFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.867 8.083h-11.2l-2.8-2.75h-8.4c-1.54 0-2.786 1.238-2.786 2.75l-.014 16.5c0 1.513 1.26 2.75 2.8 2.75h22.4c1.54 0 2.8-1.237 2.8-2.75v-13.75c0-1.512-1.26-2.75-2.8-2.75Zm-7 4.125c1.54 0 2.8 1.238 2.8 2.75 0 1.513-1.26 2.75-2.8 2.75-1.54 0-2.8-1.237-2.8-2.75 0-1.512 1.26-2.75 2.8-2.75Zm-5.6 9.625v1.375h11.2v-1.375c0-1.828-3.738-2.75-5.6-2.75-1.862 0-5.6.922-5.6 2.75Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderHumanFilled32;

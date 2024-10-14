import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProizvodstvennayaSistema24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M17 2a3 3 0 0 0-3 3v2.294h-3a3 3 0 0 0-3 3v2.294H5a3 3 0 0 0-3 3V22h20V2h-5Zm-3 18V9.294h-3a1 1 0 0 0-1 1V20h4Zm2 0h4V4h-3a1 1 0 0 0-1 1v15Zm-8-5.412V20H4v-4.412a1 1 0 0 1 1-1h3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconProizvodstvennayaSistema24;

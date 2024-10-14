import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZakazGostevyhPropuskov24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M3 6h18v3.07c.753.436 1.428.99 2 1.638V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.07a7.95 7.95 0 0 1-.818-2H3V6Zm10 2v1.07a8.023 8.023 0 0 0-1.292.93H5V8h8Zm-8 4h5.07a7.95 7.95 0 0 0-.818 2H5v-2Zm12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-9a1 1 0 0 1 1 1v1.5h1a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZakazGostevyhPropuskov24;

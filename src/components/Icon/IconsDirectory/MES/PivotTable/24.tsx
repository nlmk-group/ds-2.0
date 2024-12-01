import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPivotTable24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M6.522 3H3v3.452h3.522V3Zm2.258.097H21v2.914H8.78V3.097ZM7.92 17.973 12.34 21v-1.945h1.793c2.696 0 4.883-2.144 4.883-4.786v-1.758H21L17.912 8.18l-3.089 4.331h1.984v1.758c0 1.451-1.204 2.62-2.674 2.62H12.34v-1.944l-4.419 3.028Zm-1.85-7.592V8.925H3.1v11.978h2.973V10.38Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPivotTable24;

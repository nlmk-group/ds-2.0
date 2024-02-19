import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertChartFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M26.889 2H5.11A3.12 3.12 0 0 0 2 5.111V26.89A3.12 3.12 0 0 0 5.111 30H26.89A3.12 3.12 0 0 0 30 26.889V5.11A3.12 3.12 0 0 0 26.889 2Zm-3.111 15.556h-3.111v6.222h3.11v-6.222Zm-9.334-9.334h3.112v15.556h-3.112V8.222Zm-3.11 4.667H8.221v10.889h3.111v-10.89Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconInsertChartFilled32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInsertChartOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M26.889 2H5.11A3.12 3.12 0 0 0 2 5.111V26.89A3.12 3.12 0 0 0 5.111 30H26.89A3.12 3.12 0 0 0 30 26.889V5.11A3.12 3.12 0 0 0 26.889 2Zm0 24.889H5.11V5.11h21.78v21.78Zm-18.667-14h3.111v10.889h-3.11v-10.89Zm6.222-4.667h3.112v15.556h-3.112V8.222Zm6.223 9.334h3.11v6.222h-3.11v-6.222Z"
      />
    </svg>
  );
};

export default IconInsertChartOutlined32;

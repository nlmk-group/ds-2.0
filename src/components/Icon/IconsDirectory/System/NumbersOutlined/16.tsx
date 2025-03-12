import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNumbersOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.355 11V6.5H1V5h2.71v6H2.355Zm3.161 0V8.5c0-.283.087-.52.26-.713a.832.832 0 0 1 .643-.287h1.807v-1h-2.71V5h3.161c.256 0 .47.096.644.287.173.192.26.43.26.713v1.5c0 .283-.087.52-.26.713a.832.832 0 0 1-.644.287H6.871v1h2.71V11H5.516Zm5.42 0V9.5h2.71v-1h-1.807v-1h1.806v-1h-2.71V5h3.162c.256 0 .47.096.643.287.173.192.26.43.26.713v4c0 .283-.087.52-.26.713a.832.832 0 0 1-.643.287h-3.162Z"
      />
    </svg>
  );
};

export default IconNumbersOutlined16;

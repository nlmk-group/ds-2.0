import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenExitCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M3 10.222h7.222V3h2.89v10.111H3v-2.889Zm7.222 11.556H3v-3.095h10.318V29h-3.096v-7.222ZM18.89 29h2.889v-7.222H29v-3.095H18.889V29Zm2.889-26v7.222H29v3.096H18.889V3h2.889Z"
        fill={htmlColor || 'currentColor'}
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFullScreenExitCloseOutlined32;

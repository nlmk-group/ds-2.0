import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenExitCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10.2222H10.2222V3H13.1111V13.1111H3V10.2222ZM10.2222 21.7778H3V18.6825H13.3175V29H10.2222V21.7778ZM18.8889 29H21.7778V21.7778H29V18.6825H18.8889V29ZM21.7778 3V10.2222H29V13.3175H18.8889V3H21.7778Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenExitCloseOutlined32;

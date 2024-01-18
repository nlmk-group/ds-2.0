import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWarningOutline24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M29.822 26.973 17.152 4.676A1.326 1.326 0 0 0 16 4c-.475 0-.914.258-1.152.676L2.178 26.973a1.37 1.37 0 0 0 0 1.351c.238.418.677.676 1.152.676h25.34c.475 0 .914-.258 1.152-.676a1.37 1.37 0 0 0 0-1.351Zm-3.456-.676H5.634L16 8.054l10.366 18.243ZM14.67 22.243h2.66v2.703h-2.66v-2.703Zm2.66-9.46h-2.66v6.758h2.66v-6.757Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWarningOutline24;

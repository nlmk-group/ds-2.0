import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconZayavkaNaEkspressOtpravlenie24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5 2a2 2 0 0 0-2 2v13.5h2V4h12v6.5h2V4a2 2 0 0 0-2-2H5Zm9 4H7v2h7V6ZM7 9h4v2H7V9Zm0 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2h1.086a2 2 0 0 1 1.414.586l1.914 1.914A2 2 0 0 1 23 17.914V19a2 2 0 0 1-2 2h-.604a2.751 2.751 0 0 1-5.293 0h-.707a2.751 2.751 0 0 1-5.292 0H9a2 2 0 0 1-2-2v-5Zm14 5h-.8a2.751 2.751 0 0 0-2.2-1.489V16h1.086L21 17.914V19Zm-5-1.5v.629a2.76 2.76 0 0 0-.7.871h-1.1a2.75 2.75 0 0 0-4.9 0H9v-5h7v3.5Zm1.75 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11 20.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconZayavkaNaEkspressOtpravlenie24;

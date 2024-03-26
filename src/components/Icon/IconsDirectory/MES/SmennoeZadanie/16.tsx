import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSmennoeZadanie16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.684 2.634h-2.6v-1.3h-1.3v1.3h-3.9v-1.3h-1.3v1.3h-2.6a.65.65 0 0 0-.65.65v10.4c0 .359.29.65.65.65h11.7a.65.65 0 0 0 .65-.65v-10.4a.65.65 0 0 0-.65-.65Zm-6.5 5.85v-1.3h-3.25v1.3h3.25Zm-1.95 1.3v1.3h-1.3v-1.3h1.3Zm3.25-2.6h-1.3v1.3h1.3v-1.3Zm-1.3 2.6h3.25v1.3h-3.25v-1.3Zm4.55-1.3v-1.3h-1.3v1.3h1.3Zm0 1.3v1.3h-1.3v-1.3h1.3Zm-9.1-4.55h10.4v7.8h-10.4v-7.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSmennoeZadanie16;

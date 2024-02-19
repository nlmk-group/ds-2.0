import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendar2Outlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.684 2.633h-2.6v-1.3h-1.3v1.3h-3.9v-1.3h-1.3v1.3h-2.6a.65.65 0 0 0-.65.65v10.4c0 .36.29.65.65.65h11.7a.65.65 0 0 0 .65-.65v-10.4a.65.65 0 0 0-.65-.65Zm-8.45 5.85v-1.3h-1.3v1.3h1.3Zm0 1.3v1.3h-1.3v-1.3h1.3Zm3.25-2.6h-1.3v1.3h1.3v-1.3Zm-1.3 2.6h1.3v1.3h-1.3v-1.3Zm4.55-1.3v-1.3h-1.3v1.3h1.3Zm0 1.3v1.3h-1.3v-1.3h1.3Zm-5.85-5.85h3.9v1.3h1.3v-1.3h1.95v9.094h-10.4V3.933h1.95v1.3h1.3v-1.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendar2Outlined16;

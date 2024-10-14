import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendar24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.031 3.238V1.789h-2.07v1.449H5.522A3.522 3.522 0 0 0 2 6.76v11.929a3.522 3.522 0 0 0 3.522 3.522h12.956A3.522 3.522 0 0 0 22 18.689V6.76a3.522 3.522 0 0 0-3.522-3.522h-2.486V1.789h-2.07v1.449h-3.89Zm9.899 5.96V6.76c0-.802-.65-1.452-1.452-1.452h-2.486v1.448h-2.07V5.308h-3.89v1.448H7.96V5.308H5.522c-.802 0-1.452.65-1.452 1.452v2.438h15.86Zm-15.86 2.07h15.86v7.42c0 .802-.65 1.452-1.452 1.452H5.522c-.802 0-1.452-.65-1.452-1.451v-7.42Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCalendar24;

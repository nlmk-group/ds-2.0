import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkat32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.452 3.15h17.7v21.263l3.15 2.237v1.7h-24L4.3 26.66l3.153-2.247V3.15Zm-.21 23.5h18.12l-5.91-4.212V15.35h-6.3v7.088l-5.91 4.212Zm13.91-5.088V15.35h2.3v7.851l-2.3-1.639Zm2.3-16.712v8.8h-14.3v-8.8h14.3ZM9.152 23.2v-7.85h2.3v6.21l-2.3 1.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkat32;

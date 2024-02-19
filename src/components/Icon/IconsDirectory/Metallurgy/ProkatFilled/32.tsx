import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconProkatFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.452 3.65h17.7v21.263l3.15 2.237v1.7h-24v-1.685l3.15-2.252V3.65Zm13.7 18.412V15.85h2.3v7.851l-2.3-1.639Zm2.3-16.712v8.8h-14.3v-8.8h14.3ZM9.152 23.7v-7.85h2.3v6.21l-2.3 1.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconProkatFilled32;

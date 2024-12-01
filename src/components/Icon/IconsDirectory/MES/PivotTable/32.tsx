import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPivotTable32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M8.695 4H4v4.602h4.695V4Zm3.011.13H28v3.885H11.706V4.13Zm-1.145 19.834L16.453 28v-2.593h2.391c3.595 0 6.511-2.858 6.511-6.381v-2.344H28l-4.118-5.775-4.118 5.775h2.645v2.344c0 1.934-1.605 3.494-3.565 3.494h-2.39v-2.593l-5.893 4.037ZM8.095 13.841v-1.943H4.132V27.87h3.963V13.842Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPivotTable32;

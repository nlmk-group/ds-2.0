import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnfoldMore32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="m16 29.5-7-6.788 2.256-2.187 4.744 4.6 4.744-4.6L23 22.712 16 29.5Zm-4.744-18.025L9 9.288 16 2.5l7 6.788-2.256 2.187L16 6.875l-4.744 4.6Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnfoldMore32;

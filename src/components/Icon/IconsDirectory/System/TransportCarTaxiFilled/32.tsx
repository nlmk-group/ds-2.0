import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTaxiFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M25.333 25.667H6.667V27a1.333 1.333 0 0 1-1.334 1.333H4A1.334 1.334 0 0 1 2.667 27V15l3.35-8.936a2.667 2.667 0 0 1 2.498-1.73h14.97a2.667 2.667 0 0 1 2.498 1.73L29.333 15v12A1.334 1.334 0 0 1 28 28.333h-1.333A1.334 1.334 0 0 1 25.333 27v-1.333ZM5.515 15h20.97l-3-8H8.515l-3 8Zm3.152 6.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14.666 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  );
};

export default IconTransportCarTaxiFilled32;

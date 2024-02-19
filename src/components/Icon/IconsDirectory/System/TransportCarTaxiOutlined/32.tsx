import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTransportCarTaxiOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M25.333 25.667H6.667V27a1.333 1.333 0 0 1-1.334 1.334H4A1.334 1.334 0 0 1 2.667 27V13.667l3.306-7.718a2.667 2.667 0 0 1 2.454-1.615h15.146a2.667 2.667 0 0 1 2.451 1.615l3.31 7.718V27A1.334 1.334 0 0 1 28 28.334h-1.333A1.334 1.334 0 0 1 25.333 27v-1.333Zm1.334-9.334H5.333V23h21.334v-6.666ZM5.568 13.668h20.864L23.575 7H8.427l-2.858 6.667Zm3.099 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm14.666 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </svg>
  );
};

export default IconTransportCarTaxiOutlined32;

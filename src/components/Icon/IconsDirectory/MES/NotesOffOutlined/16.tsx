import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotesOffOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m1.56.62-.94.94L1.96 2.9l-.007 11.327L4.62 11.56h6l3.82 3.82.94-.94L1.56.62Zm12.393 9.607v-8H5.06L3.727.893h10.227c.733 0 1.333.6 1.333 1.334v8c0 .6-.407 1.106-.954 1.273l-1.273-1.273h.893Zm-8-2.667H4.62v1.333h1.333V7.56Zm6.667-2H8.393l1.334 1.333h2.893V5.56Zm-5.333-2h5.333v1.333H7.727l-.44-.44V3.56Zm-4 7.447.78-.78h5.22L5.953 6.893H4.62V5.56L3.287 4.227v6.78Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconNotesOffOutlined16;

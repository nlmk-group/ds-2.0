import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormula16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m8 1 7 9.333L12.9 15H3.1L1 10.333 8 1Zm1.662 10.111H6.337l1.05 2.333h1.226l1.05-2.333ZM8.7 4.364v5.192h3.885L8.7 4.364Zm-1.4 0L3.415 9.556H7.3V4.364ZM4.78 11.11H2.925l1.05 2.333H5.83L4.78 11.11Zm8.295 0H11.22l-1.05 2.333h1.855l1.05-2.333Z"
      />
    </svg>
  );
};

export default IconFormula16;

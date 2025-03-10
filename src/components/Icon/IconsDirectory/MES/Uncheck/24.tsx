import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUncheck24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m21.196 4.5 1.652-1.651L22 2l-1.652 1.652a1.982 1.982 0 0 0-.924-.228h-14c-1.1 0-2 .9-2 2v14c0 .333.082.648.228.924L2 22l.849.849L4.5 21.197c.277.145.591.227.924.227h14c1.1 0 2-.9 2-2v-14c0-.332-.082-.647-.228-.923Zm-2.62.924H5.424v13.152L18.576 5.424Zm-12.303 14 13.15-13.15v13.15H6.274Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconUncheck24;

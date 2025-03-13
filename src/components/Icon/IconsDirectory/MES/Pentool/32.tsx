import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPentool32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.143 28h-6.317a3.83 3.83 0 0 1-2.787-1.23L5 19.155l1.996-1.83a1.876 1.876 0 0 1 2.18-.27l2.323 1.28V8.782c0-1.38 1.08-2.501 2.411-2.501.164 0 .328.02.492.05C14.49 5.031 15.53 4 16.803 4c.83 0 1.553.43 1.987 1.09.28-.12.588-.18.906-.18 1.331 0 2.411 1.12 2.411 2.501v.28c.154-.03.318-.05.482-.05C23.92 7.642 25 8.763 25 10.144v13.855C25 26.21 23.274 28 21.143 28ZM7.777 19.276l5.651 6.103c.367.39.868.62 1.389.62h6.326c1.06 0 1.928-.9 1.928-2V10.142c0-.28-.212-.5-.482-.5s-.482.22-.482.5v5.852h-1.929V7.411c0-.28-.212-.5-.482-.5s-.482.22-.482.5v8.584h-1.929V6.501c0-.28-.212-.5-.482-.5s-.482.22-.482.5v9.494h-1.929V8.782c0-.28-.212-.5-.482-.5s-.482.23-.482.5v12.875l-5.159-2.83-.492.45Z"
      />
    </svg>
  );
};

export default IconPentool32;

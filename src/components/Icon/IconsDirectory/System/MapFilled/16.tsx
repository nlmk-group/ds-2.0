import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.628 2.147 2.24 3.267a.336.336 0 0 0-.24.32v10.08a.33.33 0 0 0 .333.333l.107-.02 3.188-1.212V2.147Zm1.054 10.671 2.826 1.007v-10.6L6.682 2.218v10.6Zm7.078-.085-3.198 1.077V3.182L13.56 2.02l.107-.02a.33.33 0 0 1 .333.333v10.08c0 .154-.1.274-.24.32Z"
      />
    </svg>
  );
};

export default IconMapFilled16;

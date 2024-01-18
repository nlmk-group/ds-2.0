import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Education32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16 6L4 12.6667L8.36364 15.0889V21.7556L16 26L23.6364 21.7556V15.0889L25.8182 13.8778V21.5556H28V12.6667L16 6ZM23.44 12.6667L16 16.8L8.56 12.6667L16 8.53333L23.44 12.6667ZM21.4545 20.4333L16 23.4667L10.5455 20.4333V16.3L16 19.3333L21.4545 16.3V20.4333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Education32;

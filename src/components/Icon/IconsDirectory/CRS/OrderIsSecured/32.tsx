import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOrderIsSecured32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={classes}>
      <path fill={htmlColor || 'var(--spectrum-green-50)'} d="M4 13.333h24v12H4v-12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33366 8V24H26.667V8H29.3337V24C29.3337 25.4728 28.1397 26.6667 26.667 26.6667H5.33366C3.8609 26.6667 2.66699 25.4728 2.66699 24V8H5.33366Z"
        fill={'var(--steel-80)'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.667 13.3333H5.33366V10.6667H26.667V13.3333Z"
        fill={'var(--steel-80)'}
      />
    </svg>
  );
};

export default IconOrderIsSecured32;

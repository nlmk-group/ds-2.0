import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVagon24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Zm1.725 7.275v-6.55h2.162v6.55H3.725Zm3.887 0h3.525v-6.55H7.612v6.55Zm8.776 0h-3.526v-6.55h3.525v6.55Zm1.724 0h2.163v-6.55h-2.162v6.55Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 19a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0 1.5 1.5 0 1 0-1.5 1.5Z"
      />
    </svg>
  );
};

export default IconVagon24;

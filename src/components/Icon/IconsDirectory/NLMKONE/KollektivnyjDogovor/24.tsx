import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKollektivnyjDogovor24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16 4H5v15h4.15a7.45 7.45 0 0 0 .715 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6.15a7.533 7.533 0 0 0-2-.134V4Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M14 8H7V6h7v2Zm-3 4v-2H7v2h4Zm8.207 4.707-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5 1.414-1.414.793.793 1.793-1.793 1.414 1.414Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M16.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKollektivnyjDogovor24;

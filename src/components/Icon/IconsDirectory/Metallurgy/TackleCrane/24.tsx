import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTackleCrane24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.75 2v4.924h.75a2.378 2.378 0 1 1-2.378 2.378h-1.5a3.878 3.878 0 0 0 1.82 3.286L8.5 17.25h-6v1.5h20v-1.5h-6l-1.942-4.662a3.873 3.873 0 0 0 1.745-2.53 3.878 3.878 0 0 0-3.053-4.561V2h-1.5Zm1.406 11.123c-.436.075-.88.075-1.312 0l-1.72 4.127h4.751l-1.72-4.127Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M2.5 21.75h20v-1.5h-20v1.5Z" />
    </svg>
  );
};

export default IconTackleCrane24;

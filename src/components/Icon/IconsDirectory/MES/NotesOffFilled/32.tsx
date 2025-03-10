import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotesOffFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="m0 4 1.693-1.693 27.64 27.64-1.693 1.693L20 24H8l-5.333 5.333L2.68 6.68 0 4Zm8 14.667h2.667V16H8v2.667Zm0-4V12l2.667 2.667H8Zm-2.56-12h21.227c1.466 0 2.666 1.2 2.666 2.666v16c0 1.44-1.146 2.6-2.573 2.654l-9.32-9.32H24V12h-9.227l-1.333-1.333H24V8H13.333v2.56L5.44 2.667Z"
      />
    </svg>
  );
};

export default IconNotesOffFilled32;

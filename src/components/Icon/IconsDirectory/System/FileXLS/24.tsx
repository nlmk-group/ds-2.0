import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileXLS24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22 7v14c0 1.1-.9 2-2 2H3.99C2.89 23 2 22.1 2 21l.01-18c0-1.1.89-2 1.99-2h12l6 6ZM4 21h16V8h-3.5A1.5 1.5 0 0 1 15 6.5V3H4v18Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.286 19a.712.712 0 0 0 .714-.71v-7.58c0-.392-.32-.71-.714-.71H7.714a.712.712 0 0 0-.714.71v7.58c0 .392.32.71.714.71h8.572Zm-7.857-7.579h7.142v1.106H8.43V11.42Zm0 2.527h7.142v1.104H8.43v-1.104Zm0 2.525h7.142v1.106H8.43v-1.106Z"
      />
    </svg>
  );
};

export default IconFileXLS24;

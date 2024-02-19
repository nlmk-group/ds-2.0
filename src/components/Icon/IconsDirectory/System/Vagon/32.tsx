import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVagon32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.667 8c0-.736.597-1.333 1.333-1.333h24c.736 0 1.333.597 1.333 1.333v10.667c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333V8Zm2.3 9.7V8.967H7.85V17.7H4.967Zm5.183 0h4.7V8.967h-4.7V17.7Zm11.7 0h-4.7V8.967h4.7V17.7Zm2.3 0h2.883V8.967H24.15V17.7Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 23.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm14 2a2 2 0 0 0 2-2 2 2 0 1 0 4 0 2 2 0 0 0-4 0 2 2 0 1 0-2 2Z"
      />
    </svg>
  );
};

export default IconVagon32;

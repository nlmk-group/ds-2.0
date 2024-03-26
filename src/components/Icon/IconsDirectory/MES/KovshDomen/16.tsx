import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovshDomen16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.2 2h1.134v5.635c0 .993-.305 1.919-.831 2.698h2.164V11.4h-3.128a5.333 5.333 0 0 1-.51.377 1.1 1.1 0 0 1 1.37 1.06 1.1 1.1 0 1 1 0 .014 1.1 1.1 0 1 1-1.885-.777A5.565 5.565 0 0 1 8 12.667c-.91 0-1.765-.215-2.514-.594a1.1 1.1 0 1 1-.514-.296 5.335 5.335 0 0 1-.51-.377H1.334v-1.067h2.164a4.803 4.803 0 0 1-.831-2.698V2H3.8v1.822l.483.225a2.034 2.034 0 0 0 1.72 0l.114-.053a2.765 2.765 0 0 1 2.338 0l.395.184c.327.153.71.12 1.006-.088a2.01 2.01 0 0 1 2.003-.174l.341.159V2Zm0 3.178-.764-.356a1.01 1.01 0 0 0-1.006.088 2.01 2.01 0 0 1-2.003.174L8.032 4.9a1.765 1.765 0 0 0-1.492 0l-.114.053a3.03 3.03 0 0 1-2.566 0l-.06-.028v2.71c0 2.092 1.817 3.898 4.2 3.898s4.2-1.806 4.2-3.898V5.178Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M2.5 13.944a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
    </svg>
  );
};

export default IconKovshDomen16;

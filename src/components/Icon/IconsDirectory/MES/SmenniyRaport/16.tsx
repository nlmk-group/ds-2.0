import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSmenniyRaport16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.459 2.683h2.7c.372 0 .675.303.675.675V7h-1.35V5.383h-10.8v8.1H7v1.35H2.008a.675.675 0 0 1-.675-.675v-10.8c0-.372.303-.675.676-.675h2.7v-1.35h1.35v1.35h4.05v-1.35h1.35v1.35Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M13.659 10.103v-.889H9.214v.89h4.445Zm-4.445 1.778v-.889h4.445v.89H9.214Zm3.111 1.778h-3.11v-.889h3.11v.889Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.389 7.5c-.489 0-.889.4-.889.889v6.222c0 .49.4.89.889.89h6.222c.489 0 .889-.4.889-.89V8.39c0-.489-.4-.889-.889-.889H8.39Zm6.222.889v6.222H8.39V8.39h6.222Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSmenniyRaport16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalculator16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.333 3.307H4.667V4.64h6.666V3.307ZM4.667 5.973H6v1.334H4.667V5.973ZM6 8.64H4.667v1.333H6V8.64Zm-1.333 2.667H6v1.333H4.667v-1.333Zm4-5.334H7.333v1.334h1.334V5.973ZM7.333 8.64h1.334v1.333H7.333V8.64Zm1.334 2.667H7.333v1.333h1.334v-1.333ZM10 5.973h1.333v1.334H10V5.973Zm1.333 2.667H10v4h1.333v-4Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 1.28c0-.36.28-.64.6-.64l10.8.013c.6.04.6.6.6.6v13.44c0 .354-.333.614-.613.614H2.613A.619.619 0 0 1 2 14.68V1.28Zm1.333.693h9.334v12H3.333v-12Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.333 3.307H4.667V4.64h6.666V3.307ZM4.667 5.973H6v1.334H4.667V5.973ZM6 8.64H4.667v1.333H6V8.64Zm-1.333 2.667H6v1.333H4.667v-1.333Zm4-5.334H7.333v1.334h1.334V5.973ZM7.333 8.64h1.334v1.333H7.333V8.64Zm1.334 2.667H7.333v1.333h1.334v-1.333ZM10 5.973h1.333v1.334H10V5.973Zm1.333 2.667H10v4h1.333v-4Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 1.28c0-.36.28-.64.6-.64l10.8.013c.6.04.6.6.6.6v13.44c0 .354-.333.614-.613.614H2.613A.619.619 0 0 1 2 14.68V1.28Zm1.333.693h9.334v12H3.333v-12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalculator16;

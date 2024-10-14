import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.133 15.133a.667.667 0 0 1-.942 0l-1.462-1.461a3.333 3.333 0 1 1 .943-.943l1.461 1.461a.668.668 0 0 1 0 .943Zm-2.828-5.657a2 2 0 1 0-2.828 2.83 2 2 0 0 0 2.828-2.83Zm-3.38-2.81H4V8h3.232c-.316.4-.562.851-.73 1.333H4v1.334h2.254c-.002.055-.004.11-.004.166a4.56 4.56 0 0 0 .743 2.5H2.667A1.333 1.333 0 0 1 1.333 12V2.667a1.333 1.333 0 0 1 1.334-1.334H12a1.333 1.333 0 0 1 1.333 1.334v4.326a4.58 4.58 0 0 0-4.409-.326ZM10.666 4H4v1.333h6.667V4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewFilled16;

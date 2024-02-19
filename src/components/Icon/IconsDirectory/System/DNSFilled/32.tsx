import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDNSFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28.444 17.556H3.556c-.856 0-1.556.7-1.556 1.555v9.333C2 29.3 2.7 30 3.556 30h24.888C29.3 30 30 29.3 30 28.444v-9.333c0-.855-.7-1.555-1.556-1.555Zm0-15.556H3.556C2.7 2 2 2.7 2 3.556v9.333c0 .855.7 1.555 1.556 1.555h24.888c.856 0 1.556-.7 1.556-1.555V3.556C30 2.7 29.3 2 28.444 2ZM8.222 10.556A2.34 2.34 0 0 1 5.89 8.222 2.34 2.34 0 0 1 8.222 5.89a2.35 2.35 0 0 1 2.334 2.333 2.34 2.34 0 0 1-2.334 2.334ZM5.89 23.778a2.34 2.34 0 0 0 2.333 2.333 2.33 2.33 0 0 0 2.334-2.333 2.34 2.34 0 0 0-2.334-2.334 2.34 2.34 0 0 0-2.333 2.334Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDNSFilled32;

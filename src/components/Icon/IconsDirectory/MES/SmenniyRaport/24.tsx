import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSmenniyRaport24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M17.188 4.025h4.05c.559 0 1.012.453 1.012 1.012V10.5h-2.025V8.075h-16.2v12.15H10.5v2.025H3.013c-.56 0-1.013-.453-1.013-1.012v-16.2c0-.56.454-1.013 1.013-1.013h4.05V2h2.025v2.025h6.075V2h2.025v2.025Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M20.488 15.155V13.82h-6.667v1.334h6.667Zm-6.667 2.666v-1.333h6.667v1.333h-6.667Zm4.667 2.667h-4.667v-1.333h4.667v1.333Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.583 11.25c-.733 0-1.333.6-1.333 1.333v9.334c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333v-9.334c0-.733-.6-1.333-1.333-1.333h-9.334Zm9.334 1.333v9.334h-9.334v-9.334h9.334Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSmenniyRaport24;

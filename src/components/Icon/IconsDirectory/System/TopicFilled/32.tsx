import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTopicFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m16 9-2.333-2.333h-7A2.33 2.33 0 0 0 4.345 9l-.012 14a2.34 2.34 0 0 0 2.334 2.333h19.565c.793 0 1.435-.653 1.435-1.435V11.333A2.34 2.34 0 0 0 25.333 9H16Zm-7 7v-2.333h14V16H9Zm0 2.333v2.334h9.333v-2.334H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTopicFilled32;

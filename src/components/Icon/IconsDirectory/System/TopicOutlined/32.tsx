import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTopicOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M25.333 9H16l-2.333-2.333h-7A2.33 2.33 0 0 0 4.345 9l-.012 14a2.34 2.34 0 0 0 2.334 2.333h19.565c.793 0 1.435-.653 1.435-1.435V11.333A2.34 2.34 0 0 0 25.333 9Zm0 14H6.667V9h6.031l2.334 2.333h10.301V23ZM23 16H9v-2.333h14V16Zm-4.667 4.667H9v-2.334h9.333v2.334Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16 9h9.333a2.34 2.34 0 0 1 2.334 2.333v12.565c0 .782-.642 1.435-1.435 1.435H6.667A2.34 2.34 0 0 1 4.333 23l.012-14a2.33 2.33 0 0 1 2.322-2.333h7L16 9ZM6.667 23h18.666V11.333H15.032L12.698 9H6.667v14ZM23 16H9v-2.333h14V16Zm-4.667 4.667H9v-2.334h9.333v2.334Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTopicOutlined32;

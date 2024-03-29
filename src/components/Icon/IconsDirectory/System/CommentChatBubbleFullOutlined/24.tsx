import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleFullOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4 2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4Zm0 2h16v12H5.17L4 17.17V4Zm10 8H6v2h8v-2ZM6 9h12v2H6V9Zm12-3H6v2h12V6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommentChatBubbleFullOutlined24;

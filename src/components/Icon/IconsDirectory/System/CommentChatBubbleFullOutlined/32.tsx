import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleFullOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.8 2a2.796 2.796 0 0 0-2.786 2.8L2 30l5.6-5.6h19.6c1.54 0 2.8-1.26 2.8-2.8V4.8C30 3.26 28.74 2 27.2 2H4.8Zm0 2.8h22.4v16.8H6.438L4.8 23.238V4.8Zm14 11.2H7.6v2.8h11.2V16ZM7.6 11.8h16.8v2.8H7.6v-2.8Zm16.8-4.2H7.6v2.8h16.8V7.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommentChatBubbleFullOutlined32;

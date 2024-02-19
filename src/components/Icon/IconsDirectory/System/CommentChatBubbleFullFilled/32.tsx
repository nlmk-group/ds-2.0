import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleFullFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.014 4.8C2.014 3.26 3.26 2 4.8 2h22.4C28.74 2 30 3.26 30 4.8v16.8c0 1.54-1.26 2.8-2.8 2.8H7.6L2 30l.014-25.2ZM18.8 16H7.6v2.8h11.2V16ZM7.6 11.8h16.8v2.8H7.6v-2.8Zm16.8-4.2H7.6v2.8h16.8V7.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommentChatBubbleFullFilled32;

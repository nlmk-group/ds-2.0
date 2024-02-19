import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleClearOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.014 4.8C2.014 3.26 3.26 2 4.8 2h22.4C28.74 2 30 3.26 30 4.8v16.8c0 1.54-1.26 2.8-2.8 2.8H7.6L2 30l.014-25.2Zm25.186 0H4.8v18.438L6.438 21.6H27.2V4.8Z"
      />
    </svg>
  );
};

export default IconCommentChatBubbleClearOutlined32;

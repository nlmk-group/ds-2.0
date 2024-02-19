import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleClearOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.007 2.4c0-.77.623-1.4 1.393-1.4h11.2c.77 0 1.4.63 1.4 1.4v8.4c0 .77-.63 1.4-1.4 1.4H3.8L1 15l.007-12.6Zm12.593 0H2.4v9.219l.819-.819H13.6V2.4Z"
      />
    </svg>
  );
};

export default IconCommentChatBubbleClearOutlined16;

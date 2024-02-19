import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleFullFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1.007 2.4c0-.77.623-1.4 1.393-1.4h11.2c.77 0 1.4.63 1.4 1.4v8.4c0 .77-.63 1.4-1.4 1.4H3.8L1 15l.007-12.6ZM9.4 8H3.8v1.4h5.6V8ZM3.8 5.9h8.4v1.4H3.8V5.9Zm8.4-2.1H3.8v1.4h8.4V3.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommentChatBubbleFullFilled16;

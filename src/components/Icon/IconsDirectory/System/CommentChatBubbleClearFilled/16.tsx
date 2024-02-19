import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommentChatBubbleClearFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.4 1c-.77 0-1.393.63-1.393 1.4L1 15l2.8-2.8h9.8c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4H2.4Z"
      />
    </svg>
  );
};

export default IconCommentChatBubbleClearFilled16;

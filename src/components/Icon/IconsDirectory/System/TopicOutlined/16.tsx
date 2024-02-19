import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTopicOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.667 4.5H8L6.833 3.333h-3.5c-.641 0-1.16.525-1.16 1.167l-.006 7a1.17 1.17 0 0 0 1.166 1.167h9.783a.72.72 0 0 0 .717-.718V5.667A1.17 1.17 0 0 0 12.667 4.5Zm0 7H3.333v-7H6.35l1.167 1.167h5.15V11.5ZM11.5 8h-7V6.833h7V8Zm-2.333 2.333H4.5V9.167h4.667v1.166Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 4.5h4.667a1.17 1.17 0 0 1 1.166 1.167v6.282a.72.72 0 0 1-.717.718H3.333A1.17 1.17 0 0 1 2.167 11.5l.006-7c0-.642.519-1.167 1.16-1.167h3.5L8 4.5Zm-4.667 7h9.334V5.667H7.516L6.349 4.5H3.333v7ZM11.5 8h-7V6.833h7V8Zm-2.333 2.333H4.5V9.167h4.667v1.166Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTopicOutlined16;

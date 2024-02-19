import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTopicFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.667 4.5H8L6.833 3.333h-3.5c-.641 0-1.16.525-1.16 1.167l-.006 7a1.17 1.17 0 0 0 1.166 1.167h9.783a.72.72 0 0 0 .717-.718V5.667A1.17 1.17 0 0 0 12.667 4.5ZM4.5 8V6.833h7V8h-7Zm0 1.167v1.166h4.667V9.167H4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconTopicFilled16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSaveOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M3.333 2h8L14 4.667v8C14 13.4 13.4 14 12.667 14H3.333C2.593 14 2 13.4 2 12.667V3.333C2 2.6 2.593 2 3.333 2Zm0 10.667h9.334V5.22L10.78 3.333H3.333v9.334ZM8 8c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2Zm2-4H4v2.667h6V4Z"
      />
    </svg>
  );
};

export default IconSaveOutlined16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderHumanOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.26 6c0-1.51 1.221-2.75 2.74-2.75h6.31l.22.22 1.78 1.78H20A2.756 2.756 0 0 1 22.75 8v10A2.756 2.756 0 0 1 20 20.75H4A2.756 2.756 0 0 1 1.25 18l.01-12ZM4 4.75c-.68 0-1.24.56-1.24 1.25l-.01 12c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25V8c0-.686-.564-1.25-1.25-1.25h-8.31l-.22-.22-1.78-1.78H4ZM15 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm-4 7v1h8v-1c0-1.33-2.67-2-4-2s-4 .67-4 2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderHumanOutlined24;

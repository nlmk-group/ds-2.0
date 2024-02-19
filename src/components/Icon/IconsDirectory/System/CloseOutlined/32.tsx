import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.943 16.257 7 23.2 8.8 25l6.943-6.943L16 17.8l.257.257L23.2 25l1.8-1.8-6.943-6.943L17.8 16l.257-.257.579-.579L25 8.8 23.2 7l-6.943 6.943L16 14.2l-.257-.257-.579-.579L8.8 7 7 8.8l6.943 6.943.257.257-.257.257Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCloseOutlined32;

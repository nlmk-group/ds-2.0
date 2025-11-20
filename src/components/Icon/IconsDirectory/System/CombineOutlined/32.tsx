import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCombineOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9 23H4.8A2.8 2.8 0 0 1 2 20.2V4.8A2.8 2.8 0 0 1 4.8 2h15.4A2.8 2.8 0 0 1 23 4.8V9h4.2a2.8 2.8 0 0 1 2.8 2.8v15.4a2.8 2.8 0 0 1-2.8 2.8H11.8A2.8 2.8 0 0 1 9 27.2V23ZM4.8 4.8h15.4V9h-8.4A2.8 2.8 0 0 0 9 11.8v8.4H4.8V4.8Zm18.2 7h4.2v15.4H11.8V23h8.4a2.8 2.8 0 0 0 2.8-2.8v-8.4Zm-2.8 0v8.4h-8.4v-8.4h8.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCombineOutlined32;

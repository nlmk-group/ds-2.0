import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocCopyOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M11.6 14V6.8L8 3.2H3.2c-.66 0-1.2.54-1.2 1.2V14c0 .66.534 1.2 1.194 1.2H10.4c.66 0 1.2-.54 1.2-1.2Zm-1.2 0H3.194V4.4H7.4v3h3V14Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M14 11.601c0 .66-.54 1.199-1.2 1.199V5l-3-3H4.4c0-.66.54-1.2 1.2-1.2h4.8L14 4.4v7.201ZM4.4 9.2h4.8v1.2H4.4V9.2Zm0 2.4h3.2v1.2H4.4v-1.2Z"
      />
    </svg>
  );
};

export default IconSourceDocCopyOutlined16;

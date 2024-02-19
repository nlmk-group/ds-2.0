import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAddCommentOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.475 9.4h1.05V7.125H10.8v-1.05H8.525V3.8h-1.05v2.275H5.2v1.05h2.275V9.4ZM1 15V2.05c0-.268.105-.51.315-.726A.994.994 0 0 1 2.05 1h11.9c.268 0 .51.108.726.324.216.216.324.458.324.726v9.1c0 .268-.108.51-.324.726-.216.216-.458.324-.726.324H3.8L1 15Zm1.05-2.537 1.313-1.313H13.95v-9.1H2.05v10.413Zm0-10.413v10.413V2.05Z"
      />
    </svg>
  );
};

export default IconAddCommentOutlined16;

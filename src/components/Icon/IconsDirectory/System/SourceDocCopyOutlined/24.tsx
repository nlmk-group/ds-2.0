import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSourceDocCopyOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.8 19.6V10L12 5.2H5.6c-.88 0-1.6.72-1.6 1.6v12.8c0 .88.712 1.6 1.592 1.6H15.2c.88 0 1.6-.72 1.6-1.6Zm-1.6 0H5.592V6.8H11.2v4h4v8.8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M20 16.402C20 17.28 19.28 18 18.4 18V7.6l-4-4H7.2c0-.88.72-1.6 1.6-1.6h6.4L20 6.8v9.602ZM7.2 13.2h6.4v1.6H7.2v-1.6Zm0 3.2h4.267V18H7.2v-1.6Z"
      />
    </svg>
  );
};

export default IconSourceDocCopyOutlined24;

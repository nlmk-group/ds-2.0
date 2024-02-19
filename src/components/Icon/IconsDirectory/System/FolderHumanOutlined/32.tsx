import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderHumanOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.014 7.628C1.014 5.61 2.681 4 4.7 4h8.507l.291.283 2.409 2.345h10.394c2.012 0 3.7 1.605 3.7 3.629v13.141c0 2.023-1.688 3.628-3.7 3.628h-21.6C2.687 27.026 1 25.421 1 23.398l.014-15.77ZM4.7 6c-.952 0-1.687.754-1.687 1.628v.001L3 23.4c0 .867.742 1.627 1.7 1.627h21.601c.959 0 1.7-.76 1.7-1.628V10.257c0-.868-.742-1.629-1.7-1.629H15.094l-.29-.283L12.393 6H4.7Zm14.85 5.57c1.486 0 2.7 1.183 2.7 2.629s-1.214 2.628-2.7 2.628c-1.484 0-2.7-1.182-2.7-2.628 0-1.446 1.216-2.628 2.7-2.628Zm-5.4 9.2v1.314h10.801V20.77c0-1.748-3.605-2.628-5.4-2.628-1.796 0-5.4.88-5.4 2.628Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderHumanOutlined32;

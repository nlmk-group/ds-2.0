import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFolderHumanOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.757 3.75c0-1.126.941-2 2.048-2h4.217l.217.209L8.327 3h4.919c1.101 0 2.055.869 2.055 2v6.256c0 1.131-.954 2-2.055 2H2.806c-1.103 0-2.056-.869-2.056-2v-.001L.757 3.75Zm2.048-.5c-.329 0-.548.252-.548.5v.002l-.007 7.505c0 .244.221.5.555.5h10.44c.335 0 .556-.256.556-.5V5.002c0-.244-.221-.501-.555-.501H7.724l-.218-.209L6.42 3.25H2.805Zm7.178 2.377c.718 0 1.305.563 1.305 1.251S10.701 8.13 9.983 8.13s-1.305-.563-1.305-1.25c0-.689.587-1.252 1.305-1.252Zm-2.61 4.379v.625h5.22v-.625c0-.832-1.742-1.251-2.61-1.251-.868 0-2.61.419-2.61 1.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFolderHumanOutlined16;

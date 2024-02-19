import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowUpLeftOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.27 4.293a1 1 0 0 1 0 1.414l-4.856 4.856h6.031c2.167 0 3.855 0 5.209.11 1.375.113 2.493.344 3.5.857a8.876 8.876 0 0 1 3.879 3.878c.513 1.007.744 2.126.856 3.5.111 1.355.111 3.042.111 5.21V26a1 1 0 1 1-2 0v-1.837c0-2.222 0-3.828-.104-5.091-.102-1.252-.3-2.078-.645-2.756a6.876 6.876 0 0 0-3.005-3.004c-.678-.345-1.504-.543-2.755-.646-1.263-.103-2.87-.104-5.091-.104H7.414l4.856 4.856a1 1 0 0 1-1.415 1.414L4.293 12.27a1 1 0 0 1 0-1.415l6.562-6.562a1 1 0 0 1 1.415 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowUpLeftOutlined32;

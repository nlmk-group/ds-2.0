import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownRightOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5 4a1 1 0 0 1 1 1v1.838c0 2.221 0 3.827.104 5.09.102 1.252.3 2.078.645 2.756a6.875 6.875 0 0 0 3.005 3.004c.678.346 1.504.543 2.755.646 1.263.103 2.87.104 5.091.104h5.986l-4.856-4.856a1 1 0 0 1 1.415-1.414l6.562 6.562a1 1 0 0 1 0 1.415l-6.562 6.562a1 1 0 0 1-1.415-1.414l4.856-4.855h-6.031c-2.167 0-3.855 0-5.209-.111-1.375-.113-2.493-.344-3.5-.857a8.875 8.875 0 0 1-3.879-3.878c-.513-1.007-.744-2.126-.856-3.5C4 10.736 4 9.05 4 6.881V5a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined32;

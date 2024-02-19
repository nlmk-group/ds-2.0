import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowDownLeftOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 2a1 1 0 0 1 1 1v1.005c0 1.12 0 2.02-.06 2.748-.06.75-.19 1.406-.499 2.011a5.125 5.125 0 0 1-2.24 2.24c-.605.309-1.26.438-2.01.499-.729.06-1.63.06-2.748.06H5.414l1.73 1.73a1 1 0 1 1-1.414 1.414L2.293 11.27a1 1 0 0 1 0-1.415L5.73 6.418a1 1 0 0 1 1.415 1.414l-1.73 1.73H7.4c1.172 0 1.99 0 2.628-.052.626-.052.989-.147 1.266-.288a3.125 3.125 0 0 0 1.365-1.366c.141-.277.237-.64.288-1.266C13 5.953 13 5.134 13 3.963V3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftOutlined16;

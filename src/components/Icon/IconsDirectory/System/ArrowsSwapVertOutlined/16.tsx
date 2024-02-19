import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconArrowsSwapVertOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3 4.103 5.857 1l2.857 3.103H6.571v5.453H5.143V4.103H3Zm7.857 2.341v5.453H13L10.143 15l-2.857-3.103h2.143V6.444h1.428Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowsSwapVertOutlined16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBackSpaceOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M13.833 3h-8.75a1.11 1.11 0 0 0-.927.489L1 8l3.156 4.506c.21.294.525.494.927.494h8.75c.642 0 1.167-.5 1.167-1.111V4.11C15 3.5 14.475 3 13.833 3Zm0 8.889H5.124L2.4 8l2.718-3.889h8.715v7.778ZM9.167 8.783l-2.095 1.995-.822-.784L8.344 8 6.25 6.006l.822-.784 2.095 1.995 2.094-1.995.822.784L9.99 8l2.094 1.994-.822.784-2.094-1.995Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBackSpaceOutlined16;

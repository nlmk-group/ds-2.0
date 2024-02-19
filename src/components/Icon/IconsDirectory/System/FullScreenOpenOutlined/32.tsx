import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenOpenOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.889 12.286H3V3h9.286v2.889H5.889v6.397ZM3 19.714h2.889v6.397h6.397V29H3v-9.286Zm23.111 6.397h-6.397V29H29v-9.286h-2.889v6.397ZM19.714 5.89V3H29v9.286h-2.889V5.889h-6.397Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenOpenOutlined32;

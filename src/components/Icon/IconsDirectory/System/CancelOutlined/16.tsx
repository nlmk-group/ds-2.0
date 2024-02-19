import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCancelOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8 1C4.129 1 1 4.129 1 8s3.129 7 7 7 7-3.129 7-7-3.129-7-7-7Zm1.813 4.2L8 7.013 6.187 5.2l-.987.987L7.013 8 5.2 9.813l.987.987L8 8.987 9.813 10.8l.987-.987L8.987 8 10.8 6.187 9.813 5.2ZM2.4 8c0 3.087 2.513 5.6 5.6 5.6 3.087 0 5.6-2.513 5.6-5.6 0-3.087-2.513-5.6-5.6-5.6A5.607 5.607 0 0 0 2.4 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCancelOutlined16;

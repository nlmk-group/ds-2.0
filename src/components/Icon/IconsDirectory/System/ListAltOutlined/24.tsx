import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9ZM9 7H7v2h2V7Zm8 0h-6v2h6V7Zm0 4h-6v2h6v-2Zm-6 4h6v2h-6v-2Zm-4-4h2v2H7v-2Zm2 4H7v2h2v-2Zm-4 4h14V5H5v14Z"
      />
    </svg>
  );
};

export default IconListAltOutlined24;

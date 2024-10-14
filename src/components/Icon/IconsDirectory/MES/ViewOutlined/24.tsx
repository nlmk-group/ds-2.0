import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconViewOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M22.7 22.7a1 1 0 0 1-1.414 0l-2.193-2.192a5 5 0 1 1 1.415-1.415l2.192 2.192a1 1 0 0 1 0 1.415Zm-4.243-8.485a3.001 3.001 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243ZM18 4H4V18h5.582c.178.708.467 1.383.855 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.433a6.9 6.9 0 0 0-2-1.87V6Zm-12 12v-2h3.771a6.959 6.959 0 0 0-.388 2H6ZM6 6h10v2H6V6Zm4.879 6H6V10h7.662a6.917 6.917 0 0 0-1.191 1.145A6.917 6.917 0 0 0 10.88 12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconViewOutlined24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconAutorenewSystemOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M23.6363 15.9999H19.8182L24.9091 20.9999L30 15.9999H26.1818C26.1818 10.4749 21.6254 5.99994 16 5.99994C14.0018 5.99994 12.1436 6.57494 10.5782 7.54994L12.4363 9.37494C13.4927 8.81244 14.7145 8.49994 16 8.49994C20.2127 8.49994 23.6363 11.8624 23.6363 15.9999Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M21.4218 24.4499L19.5637 22.6249C18.4946 23.1749 17.2855 23.4999 16 23.4999C11.7873 23.4999 8.36367 20.1374 8.36367 15.9999H12.1818L7.09094 10.9999L2.00003 15.9999H5.81821C5.81821 21.5249 10.3746 25.9999 16 25.9999C17.9982 25.9999 19.8564 25.4249 21.4218 24.4499Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.84 17.23H17.49L18.08 19H19.4L16.9 12H15.5L13 19H14.26L14.84 17.23ZM17.14 16.17H15.19L15.7 14.64L16.17 13.2L17.14 16.17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAutorenewSystemOutlined32;

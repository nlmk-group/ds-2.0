import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        d="M13.297 9v1.017c.703 0 .703 0 .703 1.1 0 .551 0 .816-.132.943s-.396.116-.923.116h-9.89C2 12.176 2 12.176 2 11.096c0-1.079 0-1.079.703-1.079V9c0-1.162.373-2.267 1.08-3.194a5.383 5.383 0 0 1 1.765-1.494v3.276h.691v-3.58h.004A1.059 1.059 0 0 1 7.297 3h1.406c.564 0 1.027.447 1.053 1.007l.005.002v3.58h.69V4.311a5.384 5.384 0 0 1 1.766 1.494A5.232 5.232 0 0 1 13.297 9ZM3.055 11.47h9.89c.194 0 .352 0 .352-.353s-.158-.353-.352-.353h-9.89c-.194 0-.352 0-.352.354 0 .352.158.352.352.352Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetFilled16;

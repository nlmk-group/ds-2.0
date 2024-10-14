import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M24 15.118s1.696-.737 2.387-1.425a5.71 5.71 0 0 0 1.61-4.91l-4.169 4.159-3.91-.9-.903-3.903 4.168-4.16a5.722 5.722 0 0 0-6.531 6.518l.427 1.675s-2.408-2.473-2.408-2.422A7.65 7.65 0 0 1 26.4 3.17l-5.279 5.268.45 1.952 1.955.45 5.28-5.268a7.632 7.632 0 0 1-1.068 9.471C27.082 15.7 25.5 16.5 25.5 16.5L24 15.118Zm-6.255 1.44 1.8-1.8 9.83 9.825a2.117 2.117 0 0 1 0 2.997l-1.8 1.799a2.12 2.12 0 0 1-2.999 0l-9.829-9.825 1.765-1.764-8.278-8.278-2.85.521L2.02 5.764l3.697-3.697 4.27 3.364-.52 2.85 8.278 8.277Zm7.282 10.872a1.273 1.273 0 0 0 1.8 0l.6-.6a1.27 1.27 0 0 0 0-1.799l-7.848-7.842-2.4 2.398 7.848 7.843ZM5.743 4.555 4.506 5.789 6 7.75l1.517-.187.233-1.313-2.007-1.695ZM10.9 16.238l1.203 1.2-7.528 7.512a1.272 1.272 0 0 0 0 1.8l.602.6a1.278 1.278 0 0 0 1.805 0l5.735-5.72 1.204 1.2-6.487 6.474a2.13 2.13 0 0 1-3.008 0l-1.805-1.8a2.12 2.12 0 0 1 0-3.003l8.279-8.263Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInRepairOutlined32;

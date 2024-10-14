import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12 7.559s.848-.369 1.193-.713A2.856 2.856 0 0 0 14 4.391l-2.085 2.08-1.955-.45-.451-1.952 2.084-2.08a2.861 2.861 0 0 0-3.266 3.26l.214.837S7.336 4.849 7.336 4.875a3.825 3.825 0 0 1 5.864-3.29l-2.64 2.634.226.976.977.225 2.64-2.634a3.816 3.816 0 0 1-.534 4.735c-.328.329-1.12.729-1.12.729L12 7.559Zm-3.127.72.9-.9 4.914 4.912a1.06 1.06 0 0 1 0 1.499l-.9.9a1.06 1.06 0 0 1-1.5 0L7.375 9.776l.882-.882-4.14-4.139-1.424.26L1.01 2.882l1.849-1.849 2.135 1.683-.26 1.424 4.139 4.139Zm3.64 5.436a.637.637 0 0 0 .9 0l.3-.3a.637.637 0 0 0 0-.9L9.79 8.595l-1.2 1.198 3.923 3.922ZM2.871 2.277l-.618.617.747.98.758-.093.117-.656-1.004-.848ZM5.45 8.12l.602.6-3.765 3.756a.636.636 0 0 0 0 .9l.301.3a.639.639 0 0 0 .903 0l2.868-2.86.601.6-3.243 3.237a1.065 1.065 0 0 1-1.504 0l-.903-.9a1.06 1.06 0 0 1 0-1.502L5.45 8.12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInRepairOutlined16;

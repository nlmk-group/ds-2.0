import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVagonFull16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m2.558 4.072.216-.425a1.52 1.52 0 0 1 .883-.752L5.99 2.13c.313-.102.652-.102.966 0l.608.2c.183.06.385.012.52-.121l.055-.054a1.548 1.548 0 0 1 1.763-.28l1.315.645a.52.52 0 0 0 .067.027l1.059.347c.384.126.702.396.883.752l.216.425h.858c.387 0 .7.308.7.688v5.5c0 .38-.313.687-.7.687H1.7a.694.694 0 0 1-.7-.687v-5.5c0-.38.313-.688.7-.688h.858Zm6.301-1.209a.516.516 0 0 1 .588-.093l1.315.646c.065.031.132.058.2.08l1.059.347c.12.04.22.121.282.23H3.697a.507.507 0 0 1 .282-.23l2.333-.763a.518.518 0 0 1 .322 0l.608.199c.549.18 1.154.04 1.563-.362l.054-.054ZM2.02 9.947V5.072h2.32v4.875H2.02Zm3.344 0h1.978V5.072H5.363v4.875Zm3.001 0h2.274V5.072H8.365v4.875Zm3.298-4.875v4.875h2.32V5.072h-2.32Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M2.75 13.072c.58 0 1.05-.462 1.05-1.031 0 .57.47 1.031 1.05 1.031.58 0 1.05-.462 1.05-1.031 0-.57-.47-1.031-1.05-1.031-.58 0-1.05.461-1.05 1.03 0-.569-.47-1.03-1.05-1.03-.58 0-1.05.461-1.05 1.03 0 .57.47 1.032 1.05 1.032Zm8.4 0c.576 0 1.044-.456 1.05-1.02.006.564.474 1.02 1.05 1.02.58 0 1.05-.462 1.05-1.031 0-.57-.47-1.031-1.05-1.031a1.04 1.04 0 0 0-1.05 1.02 1.041 1.041 0 0 0-1.05-1.02c-.58 0-1.05.461-1.05 1.03 0 .57.47 1.032 1.05 1.032Z"
      />
    </svg>
  );
};

export default IconVagonFull16;

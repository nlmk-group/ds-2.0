import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMetallalomScrap16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7.3501 3.1501H6V1.8501H10V3.1501H8.6501V4.8501H11.2693L14.4193 8.0001L11.9597 10.4597L11.0404 9.54048L12.5808 8.0001L10.7308 6.1501H5.26929L3.41929 8.0001L4.95967 9.54048L4.04043 10.4597L1.58081 8.0001L4.73081 4.8501H7.3501V3.1501Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 14.1501H1V12.8501H2.73066L6.73066 8.8501H9.26914L13.2691 12.8501H15V14.1501ZM11.4307 12.8501H4.56914L7.26914 10.1501H8.73066L11.4307 12.8501Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallalomScrap16;

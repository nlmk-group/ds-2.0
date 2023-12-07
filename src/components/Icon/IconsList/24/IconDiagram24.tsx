import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDiagram24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8594 14.9957H19.3422V13.6245C19.3422 12.1223 18.0157 10.9345 16.4297 10.9345H13.1406V9.0043H14.6578C15.2675 9.0043 15.7984 8.54588 15.7984 7.93884V3.06546C15.7984 2.45842 15.2675 2 14.6578 2H9.34219C8.73247 2 8.20155 2.45842 8.20155 3.06546V7.93884C8.20155 8.54588 8.73247 9.0043 9.34219 9.0043H10.8594V10.9345H7.57032C5.9843 10.9345 4.65781 12.1223 4.65781 13.6245V14.9957H3.14064C2.53092 14.9957 2 15.4541 2 16.0612V20.9345C2 21.5416 2.53092 22 3.14064 22H8.45626C9.06598 22 9.5969 21.5416 9.5969 20.9345V16.0612C9.5969 15.4541 9.06598 14.9957 8.45626 14.9957H6.93909V13.6245C6.93909 13.3356 7.20286 13.0655 7.57032 13.0655H16.4297C16.7971 13.0655 17.0609 13.3356 17.0609 13.6245V14.9957H15.5437C14.934 14.9957 14.4031 15.4541 14.4031 16.0612V20.9345C14.4031 21.5416 14.934 22 15.5437 22H20.8594C21.4691 22 22 21.5416 22 20.9345V16.0612C22 15.4541 21.4691 14.9957 20.8594 14.9957Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDiagram24;

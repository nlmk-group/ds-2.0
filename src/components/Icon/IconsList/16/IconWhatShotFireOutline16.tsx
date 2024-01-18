import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFireOutline16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={classes}>
      <g clipPath="url(#clip0_146_14748)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.53125 1C8.53125 1 9.04 2.73933 9.04 4.15049C9.04 5.50258 8.11188 6.59869 6.69562 6.59869C5.2725 6.59869 4.2 5.50258 4.2 4.15049L4.22062 3.91421C2.83188 5.48945 2 7.53071 2 9.74918C2 12.6503 4.46125 15 7.5 15C10.5387 15 13 12.6503 13 9.74918C13 6.21144 11.2194 3.05438 8.53125 1ZM7.20438 9.19784C6.26938 9.38162 5.71251 9.95921 5.71251 10.7796C5.71251 11.6592 6.47563 12.368 7.42438 12.368C8.83376 12.368 9.97501 11.2785 9.97501 9.93295C9.97501 9.23065 9.87188 8.54148 9.65876 7.88513C9.11563 8.58743 8.14626 9.01406 7.20438 9.19784ZM3.37504 9.74921C3.37504 11.9217 5.22442 13.6873 7.50004 13.6873C9.77567 13.6873 11.625 11.9217 11.625 9.74921C11.625 8.06895 11.1713 6.44776 10.3257 5.00378C9.96129 6.7103 8.52442 7.91143 6.69567 7.91143C5.62317 7.91143 4.66067 7.50449 3.96629 6.84157C3.58129 7.7539 3.37504 8.74499 3.37504 9.74921Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="clip0_146_14748">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconWhatShotFireOutline16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconWhatShotFire16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.04 4.15049C10.04 2.73933 9.53125 1 9.53125 1C12.2194 3.05438 14 6.21144 14 9.74918C14 12.6503 11.5387 15 8.5 15C5.46125 15 3 12.6503 3 9.74918C3 7.53071 3.83188 5.48945 5.22062 3.91421L5.2 4.15049C5.2 5.50258 6.2725 6.59869 7.69562 6.59869C9.11188 6.59869 10.04 5.50258 10.04 4.15049ZM6.71251 10.7796C6.71251 9.95921 7.26938 9.38162 8.20438 9.19784C9.14626 9.01406 10.1156 8.58743 10.6588 7.88513C10.8719 8.54148 10.975 9.23065 10.975 9.93295C10.975 11.2785 9.83376 12.368 8.42438 12.368C7.47563 12.368 6.71251 11.6592 6.71251 10.7796Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconWhatShotFire16;

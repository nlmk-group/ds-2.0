import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRollFilled16: FC<IIconsProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.16214 7.99991C5.16214 6.43262 6.43268 5.16208 7.99998 5.16208C9.56727 5.16208 10.8378 6.43262 10.8378 7.99991C10.8378 9.56721 9.56727 10.8378 7.99998 10.8378C6.43268 10.8378 5.16214 9.56721 5.16214 7.99991ZM9.45943 7.99991C9.45943 8.80595 8.80601 9.45937 7.99998 9.45937C7.19394 9.45937 6.54052 8.80595 6.54052 7.99991C6.54052 7.19388 7.19394 6.54045 7.99998 6.54045C8.80601 6.54045 9.45943 7.19388 9.45943 7.99991Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM7.99998 4.51343C6.07444 4.51343 4.51349 6.07438 4.51349 7.99991C4.51349 9.92545 6.07444 11.4864 7.99998 11.4864C9.92551 11.4864 11.4865 9.92545 11.4865 7.99991C11.4865 6.07438 9.92551 4.51343 7.99998 4.51343Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRollFilled16;

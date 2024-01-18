import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconPhotoCameraOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.88889 3H9.22222L10.2389 4.11111H12C12.6111 4.11111 13.1111 4.61111 13.1111 5.22222V11.8889C13.1111 12.5 12.6111 13 12 13H3.11111C2.5 13 2 12.5 2 11.8889V5.22222C2 4.61111 2.5 4.11111 3.11111 4.11111H4.87222L5.88889 3ZM9.75 5.22222L8.73333 4.11111H6.37778L5.36111 5.22222H3.11111V11.8889H12V5.22222H9.75ZM7.55556 6.88889C8.47222 6.88889 9.22222 7.63889 9.22222 8.55556C9.22222 9.47222 8.47222 10.2222 7.55556 10.2222C6.63889 10.2222 5.88889 9.47222 5.88889 8.55556C5.88889 7.63889 6.63889 6.88889 7.55556 6.88889ZM4.77778 8.55556C4.77778 7.02222 6.02222 5.77778 7.55556 5.77778C9.08889 5.77778 10.3333 7.02222 10.3333 8.55556C10.3333 10.0889 9.08889 11.3333 7.55556 11.3333C6.02222 11.3333 4.77778 10.0889 4.77778 8.55556Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPhotoCameraOutlined16;

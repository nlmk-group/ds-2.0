import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconBusinessOutlined16: FC<IIconsProps> = ({
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
        d="M7.77778 4.11111V1H0V15H15.5556V4.11111H7.77778ZM3.11111 13.4444H1.55556V11.8889H3.11111V13.4444ZM3.11111 10.3333H1.55556V8.77778H3.11111V10.3333ZM3.11111 7.22222H1.55556V5.66667H3.11111V7.22222ZM3.11111 4.11111H1.55556V2.55556H3.11111V4.11111ZM6.22222 13.4444H4.66667V11.8889H6.22222V13.4444ZM6.22222 10.3333H4.66667V8.77778H6.22222V10.3333ZM6.22222 7.22222H4.66667V5.66667H6.22222V7.22222ZM6.22222 4.11111H4.66667V2.55556H6.22222V4.11111ZM14 13.4444H7.77778V11.8889H9.33333V10.3333H7.77778V8.77778H9.33333V7.22222H7.77778V5.66667H14V13.4444ZM12.4444 7.22222H10.8889V8.77778H12.4444V7.22222ZM12.4444 10.3333H10.8889V11.8889H12.4444V10.3333Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBusinessOutlined16;

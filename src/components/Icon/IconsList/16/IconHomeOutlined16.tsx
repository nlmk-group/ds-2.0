import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHomeOutlined16: FC<IIconsProps> = ({
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
        d="M8.23529 3.21529L12.3529 6.92118V13.3529H10.7059V8.41176H5.76471V13.3529H4.11765V6.92118L8.23529 3.21529ZM8.23529 1L0 8.41176H2.47059V15H7.41176V10.0588H9.05882V15H14V8.41176H16.4706L8.23529 1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHomeOutlined16;

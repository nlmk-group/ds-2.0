import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconInfo16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M7.993 1.333A6.663 6.663 0 0 0 1.333 8c0 3.68 2.98 6.667 6.66 6.667A6.67 6.67 0 0 0 14.667 8a6.67 6.67 0 0 0-6.674-6.667Zm.674 3.333V6H7.333V4.666h1.334Zm0 2.666v4H7.333v-4h1.334Zm-6 .667A5.332 5.332 0 0 0 8 13.333a5.332 5.332 0 0 0 5.333-5.334A5.332 5.332 0 0 0 8 2.666 5.332 5.332 0 0 0 2.667 8Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInfo16;

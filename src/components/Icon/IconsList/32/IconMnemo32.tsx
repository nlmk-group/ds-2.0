import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconMnemo32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.6667 3H3V11H5.66667V20.3333H3V28.3333H11V20.3333H8.33333V11H24.3333V20.3333H21.6667V28.3333H29.6667V20.3333H27V11H29.6667V3ZM27 8.33333V5.66667H5.66667V8.33333H27ZM5.66667 23V25.6667H8.33333V23H5.66667ZM24.3333 25.6667V23H27V25.6667H24.3333Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3335 13.6667H20.3335V21.6667H12.3335V13.6667ZM15.0002 16.3334V19.0001H17.6668V16.3334H15.0002Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMnemo32;

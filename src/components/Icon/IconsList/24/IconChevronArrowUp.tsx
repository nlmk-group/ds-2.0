import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconChevronArrowUp: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12.5 10.909 7.444 16 6 14.546 12.5 8l6.5 6.546L17.556 16 12.5 10.909Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChevronArrowUp;
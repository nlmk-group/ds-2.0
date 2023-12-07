import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Nottifications24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        d="M12 22C13.1 22 14 21.1 14 20H9.99998C9.99998 21.1 10.9 22 12 22ZM18 16V11C18 7.92997 16.37 5.36 13.5 4.68V4C13.5 3.17001 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17001 10.5 4V4.68C7.64003 5.36 5.99999 7.92 5.99999 11V16L4 18V19H20V18L18 16ZM16.5 17.25H7.49999V11C7.49999 8.25 9.375 6.0375 12 6.0375C14.625 6.0375 16.5 8.25 16.5 11V17.25Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Nottifications24;

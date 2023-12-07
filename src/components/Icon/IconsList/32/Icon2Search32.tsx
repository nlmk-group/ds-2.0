import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Search32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12.4933 7.34667C12.2533 8.2 12.1333 9.09333 12.1333 10C12.1333 15.44 16.56 19.8667 22 19.8667C22.9067 19.8667 23.8 19.7467 24.6533 19.5067C23.2667 22.92 19.9067 25.3333 16 25.3333C10.8533 25.3333 6.66667 21.1467 6.66667 16C6.66667 12.0933 9.08 8.73333 12.4933 7.34667ZM16 4C9.37333 4 4 9.37333 4 16C4 22.6267 9.37333 28 16 28C22.6267 28 28 22.6267 28 16C28 15.3867 27.9467 14.7733 27.8667 14.1867C26.56 16.0133 24.4267 17.2 22 17.2C18.0267 17.2 14.8 13.9733 14.8 10C14.8 7.58667 15.9867 5.44 17.8133 4.13333C17.2267 4.05333 16.6133 4 16 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Search32;

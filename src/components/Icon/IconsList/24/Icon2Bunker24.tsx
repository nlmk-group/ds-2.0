import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Bunker24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M12.15 4.5c-4.218 0-7.65 3.432-7.65 7.65v6.406c0 .686.558 1.244 1.244 1.244h12.812c.686 0 1.244-.558 1.244-1.244V12.15c0-4.218-3.431-7.65-7.65-7.65Zm-6.413 7.65a6.42 6.42 0 0 1 6.413-6.413 6.42 6.42 0 0 1 6.412 6.413v6.409l-.002.001-.002.002h-1.571v-2.818a.619.619 0 0 0-.618-.619H14.8v-3.131a.619.619 0 0 0-.619-.619H10.12a.619.619 0 0 0-.619.619v3.131H7.931a.619.619 0 0 0-.619.619v2.819H5.744l-.003-.003a.01.01 0 0 1-.002-.003V12.15Zm5 2.975v-2.512h.794v.318a.619.619 0 0 0 1.238 0v-.318h.793v2.512h-2.824ZM8.55 18.563v-2.2h.95v.318a.619.619 0 0 0 1.238 0v-.319h.793v2.2H8.55Zm4.219 0v-2.2h.793v.318a.619.619 0 0 0 1.238 0v-.319h.95v2.2h-2.981Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Bunker24;

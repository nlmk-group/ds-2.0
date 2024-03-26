import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilterClean16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.985 2.127A.6.6 0 0 0 10.63 2H2.576a.6.6 0 0 0-.357.127.576.576 0 0 0-.097.805l2.755 3.526v2.945a.569.569 0 0 0 .167.477l2.306 2.307a.482.482 0 0 0 .201.126 4.017 4.017 0 0 1-.373-1.685c0-1.053.414-2.065 1.15-2.819V6.458l2.755-3.526a.576.576 0 0 0-.098-.805ZM7.178 6.055v4.331l-1.15-1.15V6.06l-2.28-2.91h5.706L7.178 6.054Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M13.424 8.576a.6.6 0 0 1 0 .848L11.85 11l1.575 1.576a.6.6 0 0 1-.848.848L11 11.85l-1.576 1.575a.6.6 0 0 1-.848-.848L10.15 11 8.577 9.424a.6.6 0 0 1 .848-.848L11 10.15l1.576-1.575a.6.6 0 0 1 .848 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterClean16;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconForNewEmployee24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M20 1a2 2 0 0 1 2 2v9.59c0 1.413-1.775 2.043-2.665.946l-1.711-2.11a1 1 0 0 0-.777-.37h-1.92a5.961 5.961 0 0 0-.697-2h2.617a3 3 0 0 1 2.33 1.11L20 11.181V3H10v3.083a6.04 6.04 0 0 0-2 0V3a2 2 0 0 1 2-2h10Zm-7 4h5v2h-5V5Zm-8 7a4 4 0 1 1 6.983 2.665A7 7 0 0 1 16 21v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a7 7 0 0 1 4.017-6.335A3.985 3.985 0 0 1 5 12Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-7 9a5 5 0 0 1 10 0H4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconForNewEmployee24;

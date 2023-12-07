import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRepairWrenchTo24: FC<IIconsProps> = ({
  color = 'inherit'
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
        d="M12.4831 9.89109C13.9325 8.44164 16.0518 8.06777 17.846 8.77085L16.0187 10.5982L15.3115 11.3053L16.0187 12.0124L17.4329 13.4266L18.14 14.1337L18.8471 13.4266L20.6744 11.5993C21.3775 13.3934 21.0036 15.5127 19.5542 16.9622C18.2464 18.2699 16.3939 18.7031 14.7229 18.2568L14.1656 18.108L13.7578 18.5159L11.778 20.4957C10.997 21.2767 9.73063 21.2767 8.94958 20.4957C8.16853 19.7146 8.16853 18.4483 8.94958 17.6672L10.9294 15.6875L11.3372 15.2796L11.1884 14.7223C10.7422 13.0513 11.1753 11.1988 12.4831 9.89109Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M2 7H10.5" stroke="currentColor" strokeWidth="2" />
      <path d="M7 3L11 7L7 11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default IconRepairWrenchTo24;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Dvr32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M6.18181 6H25.8182C27.0182 6 28 7.0101 28 8.24467V21.7127C28 22.9473 27.0182 23.9574 25.8182 23.9574H20.3636V26H11.6363V23.9574H6.18181C4.98182 23.9574 4 22.9473 4 21.7127V8.24467C4 7.0101 4.98182 6 6.18181 6ZM5.88723 21.8586H25.9654V8.02021H5.88723V21.8586ZM23.6364 11.6117H11.6363V13.6364H23.6364V11.6117ZM11.6363 16.101H23.6364V18.1212H11.6363V16.101ZM10.3273 11.6117H8.36367V13.6319H10.3273V11.6117ZM8.36367 16.101H10.3273V18.1212H8.36367V16.101Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Dvr32;

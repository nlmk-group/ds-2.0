import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRepairWrenchFrom24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m8.116 3.413-2.29 2.29h6.579v1.999h-6.58l2.29 2.29-1.412 1.413L2 6.704 6.703 2l1.413 1.413ZM20.892 9.65l.001.001a5.992 5.992 0 0 1-.649 7.71 5.992 5.992 0 0 1-5.79 1.553l-1.979 1.978a2.997 2.997 0 1 1-4.238-4.238l1.978-1.978a5.992 5.992 0 0 1 1.552-5.791 5.992 5.992 0 0 1 7.71-.65l.002.002-1.352 1.353-.092.091-1.323 1.323 1.413 1.413 1.323-1.323.091-.091 1.353-1.353Zm-2.062 6.298a3.982 3.982 0 0 0 1.162-2.57l-.453.453-1.414 1.414-1.414-1.414-1.413-1.413-1.414-1.414 1.414-1.414.453-.453a3.992 3.992 0 0 0-3.604 5.023l.298 1.114-.816.816-1.978 1.978a.997.997 0 0 0 1.41 1.41L13.04 17.5l.816-.815 1.114.297a3.992 3.992 0 0 0 3.861-1.034Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRepairWrenchFrom24;

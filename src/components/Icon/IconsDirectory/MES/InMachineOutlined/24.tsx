import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInMachineOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 19.5H3A1.5 1.5 0 0 1 1.5 18V6A1.5 1.5 0 0 1 3 4.5h18A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5Zm-.188-13.313H3.188v11.625h17.625V6.188Zm-9.514 6.848 4.508-4.508 1.459 1.459-5.967 5.966-4.375-4.375 1.458-1.459 2.917 2.917ZM21.75 3H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 1 1 0 1.5ZM2.25 21h19.5a.75.75 0 1 1 0 1.5H2.25a.75.75 0 1 1 0-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInMachineOutlined24;

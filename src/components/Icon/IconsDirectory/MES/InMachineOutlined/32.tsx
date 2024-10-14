import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInMachineOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-.25-17.75H4.25v15.5h23.5V8.25Zm-12.686 9.13 6.011-6.01 1.945 1.944-7.955 7.955-5.834-5.833 1.944-1.945 3.89 3.89ZM29 4H3a1 1 0 0 1 0-2h26a1 1 0 1 1 0 2ZM3 28h26a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconInMachineOutlined32;

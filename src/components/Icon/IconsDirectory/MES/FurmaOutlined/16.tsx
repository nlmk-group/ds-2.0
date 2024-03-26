import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFurmaOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.393 1.029a1.463 1.463 0 0 0-1.68.987L8.797 7.978a1.463 1.463 0 0 0-1.603-.588L2.072 8.813A1.463 1.463 0 0 0 1 10.223v1.814c0 .658.438 1.234 1.072 1.41l5.122 1.423a1.463 1.463 0 0 0 1.855-1.41v-.135h1.892c.388 0 .76-.154 1.034-.428l1.117-1.117c.174-.174.301-.389.37-.625l.51-1.748 1.527-.51a.732.732 0 0 0-.462-1.388l-.567.189 1.277-4.377a1.463 1.463 0 0 0-1.118-1.845l-2.236-.447Zm-.287 1.435 2.236.447-2.285 7.834-1.116 1.117H9.049c-.809 0-1.464.655-1.464 1.463v.135l-5.122-1.423v-1.814L7.585 8.8v.728c0 1.252 1.76 1.528 2.143.336l2.378-7.4Z"
        fill={htmlColor || 'currentColor'}
        clipPath="evenodd"
      />
    </svg>
  );
};

export default IconFurmaOutlined16;

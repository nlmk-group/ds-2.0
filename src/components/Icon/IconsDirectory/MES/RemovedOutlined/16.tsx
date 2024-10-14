import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M14 13H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Zm-.125-8.875H2.125v7.75h11.75v-7.75ZM7.585 6a3.584 3.584 0 0 1 3.188 2.008c.116-.46.143-1.093.472-1.216.442-.165.826.127.745.623-.129.778-.244 1.12-.39 1.866-.102.525-.508.765-1.03.579-.696-.249-1.1-.388-1.786-.698-.43-.196-.572-.45-.28-.838.262-.349.873-.083 1.379.077A2.619 2.619 0 0 0 7.586 7C6.25 7 5.146 8.032 4.97 9.371c-.023.172.005.629-.482.629-.503 0-.5-.46-.485-.622C4.18 7.482 5.717 6 7.586 6ZM14.5 2h-13a.5.5 0 1 1 0-1h13a.5.5 0 0 1 0 1Zm-13 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedOutlined16;

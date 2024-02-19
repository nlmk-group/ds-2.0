import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBunkerOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4C9.383 4 4 9.383 4 16v10.049C4 27.125 4.875 28 5.951 28h20.098A1.953 1.953 0 0 0 28 26.049V16c0-6.617-5.383-12-12-12ZM5.941 16c0-5.546 4.513-10.059 10.059-10.059 5.547 0 10.059 4.513 10.059 10.059v10.051l-.002.002-.002.002a.018.018 0 0 1-.004.003h-2.462v-4.42a.97.97 0 0 0-.971-.971h-2.461v-4.912a.97.97 0 0 0-.97-.97h-6.373a.97.97 0 0 0-.97.97v4.912H9.381a.97.97 0 0 0-.97.97v4.422H5.949a.016.016 0 0 1-.008-.008V16Zm7.843 4.667v-3.942h1.245v.5a.97.97 0 0 0 1.942 0v-.5h1.245v3.942h-4.432Zm-3.431 5.392v-3.451h1.49v.5a.97.97 0 0 0 1.941 0v-.5h1.245v3.45h-4.676Zm6.618 0v-3.451h1.245v.5a.97.97 0 0 0 1.94 0v-.5h1.491v3.45h-4.676Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBunkerOutlined32;

import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBox32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.818 2.209a1.708 1.708 0 0 0-1.636 0L3.9 8.358A1.73 1.73 0 0 0 3 9.878v12.245c0 .634.345 1.217.9 1.519l11.282 6.15c.51.277 1.126.277 1.636 0l11.283-6.15c.554-.302.899-.885.899-1.52V9.878a1.73 1.73 0 0 0-.9-1.519l-11.282-6.15ZM5.453 11.655v10.027l9.32 5.08V16.735l-9.32-5.08Zm21.094 10.027-9.32 5.08V16.735l3.433-1.872v.15c0 .681.55 1.234 1.226 1.234a1.23 1.23 0 0 0 1.227-1.234v-1.486l3.434-1.872v10.027Zm-7.01-9.014L10.34 7.655 6.8 9.583 16 14.597l3.538-1.929Zm-6.622-6.417L16 4.57l9.198 5.013-3.085 1.682-9.198-5.014Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconBox32;

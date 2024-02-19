import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M1 3h8.4v1.429H1V3Zm0 2.857h8.4v1.429H1V5.857Zm11.2 0h-1.4v2.857H8v1.429h2.8V13h1.4v-2.857H15V8.714h-2.8V5.857Zm-5.6 4.286H1V8.714h5.6v1.429Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuOutlined16;

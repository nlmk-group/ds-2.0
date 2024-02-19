import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconContentCopyOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 8 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 10 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 18h-9Zm0-2h9V4h-9v12Zm-4 6a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 4 20V6h2v14h11v2H6Z"
      />
    </svg>
  );
};

export default IconContentCopyOutlined24;

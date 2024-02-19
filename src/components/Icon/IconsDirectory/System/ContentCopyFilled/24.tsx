import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconContentCopyFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M9 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 7 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 9 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 18H9Zm-4 4a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 20V6h2v14h11v2H5Z"
      />
    </svg>
  );
};

export default IconContentCopyFilled24;

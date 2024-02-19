import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListSheets32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path fill={htmlColor || 'currentColor'} d="M13.313 20.861a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.268 4.863A9.114 9.114 0 1 1 27.483 17.42l.005.004-9.915 9.915A9.116 9.116 0 1 1 4.832 14.3l9.436-9.436Zm6.436-1.169a7.415 7.415 0 0 1 4.768 1.568l-8.548 8.547c-1.167-.955-2.544-1.564-4.019-1.857a9.113 9.113 0 0 0-3.27-.052l5.915-5.915-.002-.002a7.415 7.415 0 0 1 5.156-2.289Zm5.546 12.564-.004-.004a7.414 7.414 0 0 0 .437-9.8l-9.729 9.729-.6-.601c-1.025-1.024-2.323-1.673-3.78-1.963a7.416 7.416 0 1 0 3.797 12.518l9.88-9.88Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconListSheets32;
